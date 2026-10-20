
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import ConnectDB from "./mongob";
import Register from "../models/register";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30*24*60*60, 
  },
  jwt:{
    maxAge:30*24*60*60,
  },

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider !== "google") {
        return true;
      }

      const googleProfile = profile as
        | {
            email?: string;
            email_verified?: boolean;
            name?: string;
          }
        | undefined;

      if (
        !googleProfile?.email ||
        googleProfile.email_verified !== true
      ) {
        return false;
      }

      try {
        await ConnectDB();

        await Register.findOneAndUpdate(
          { email: googleProfile.email.toLowerCase() },
          {
            $set: {
              name: googleProfile.name ?? "",
            },
            $setOnInsert: {
              email: googleProfile.email.toLowerCase(),
              password: "",
            },
          },
          {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
          }
        );

        return true;
      } catch (error) {
        console.error("Google registration failed:", error);
        return false;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/Login",
  },
};

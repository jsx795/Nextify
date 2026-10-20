"use client";
import Link from "next/link";
import Main from "../../_components/Main";
import Navbar from "../../_components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/app/_components/footer";
import {signIn} from "next-auth/react"

export default function registerpage(){
   const router = useRouter();
   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
   const [confirmpassword, setconfirmpassword] = useState("");
   const [errorxy, seterrorxy] = useState("");


   async function formhandler(e:any) {
    e.preventDefault(); 

    if(password !== confirmpassword){
        seterrorxy("password do not match!");
        return;
    }   
    seterrorxy("");


    const response = await fetch("/api/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name,email,password,
        })
    })

   

    const data = await response.json();
    if(response.ok){
    }

    setname("");
    setemail("");
    setpassword('');
    setconfirmpassword('');
    
    router.push("/Login")


    
   }
   const handleGoogleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };
    return(
        <div >
            <Navbar />
            <div className="flex bg-gradient-to-l from-white to-[#bcb7b9]  relative">
                <Main />
                <div className="flex justify-center items-center w-[45vw] sm:w-[65vw] bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]">

                <div className="flex justify-center pl-[10%] w-full  flex-col ">

                   
                    <form onSubmit={formhandler} className="flex  flex-col gap-3   " action={"/"} method="POST">
                    <h1 className=" sm:text-5xl lg:6xl text-4xl font-bold p-3 ">Register</h1>
                        <h1 className="font-semibold   text-xl sm:text-2xl lg:text-3xl ">Full Name</h1>
                        <input required onChange={(e)=>setname(e.target.value)} value={name} className="outline-none px-4   w-[30vw] sm:w-[40vw]  text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " type="text" placeholder="Enter Full Name..." />
                        <h1 className="font-semibold   text-xl sm:text-2xl lg:text-3xl">Email</h1>
                        <input required onChange={(e)=>setemail(e.target.value)} value={email} className="outline-none px-4    w-[30vw] sm:w-[40vw]    text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " type="email"  placeholder="Enter Email..." />
                        <h1 className="font-semibold   text-xl sm:text-2xl lg:text-3xl">Password</h1>
                        <input minLength={8} maxLength={12} required onChange={(e)=>setpassword(e.target.value)} value={password} className="outline-none px-4   w-[30vw] sm:w-[40vw]     text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl "  type="password" placeholder="Enter Password" />
                        <h1 className="font-semibold    text-xl sm:text-2xl lg:text-3xl">Confirm Password</h1>
                        <input minLength={8} maxLength={12} required onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword} className="outline-none px-4  w-[30vw] sm:w-[40vw]      text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl "  type="password" placeholder="Enter Password" />

                        {errorxy && <p className="text-gray-800">{errorxy}</p>}
                        <button type="submit" className="   text-lg font-bold bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] rounded-2xl  py-2 hover:bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]  w-[30vw] sm:w-[40vw] ">Register</button>
                        
                    </form>
                    
                
                    <h1 className="flex p-2 sm:p-4  text-sm sm:text-xl lg:text-2xl font-semibold ">Already have an account? <Link className="text-gray-700   hover:text-white" href={"/Login"}>Log In</Link></h1>
                    
                        <div className="text-center my-4  w-[30vw] sm:w-[40vw]   ">Or</div>
                        <button onClick={handleGoogleSignIn} className="  w-[30vw] sm:w-[40vw]   text-lg font-bold bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] rounded-2xl  py-2 px-5  hover:bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]">
                            Sign in with Google
                         </button>
                

                    

                </div>
                    

                </div>   
            </div>
            <Footer />
        </div>

    )
}
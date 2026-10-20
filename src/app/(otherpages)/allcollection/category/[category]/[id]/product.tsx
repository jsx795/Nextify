"use client";

import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/(otherpages)/context/CartContext";
import Footer from "@/app/_components/footer";
import { useRouter } from "next/navigation";
import {  useSession} from "next-auth/react";


export default function Product({ item }: any) {
 const { data:session,status} = useSession();

  const router = useRouter();

  const [quantity, setquantity] = useState(1);

  const { addToCart } = useCart();
const handleAddToCart = () => {
  if (status === "loading") return;

  const localUser = localStorage.getItem("user");
  const googleUser = session?.user;

  // Allow either manual login or Google login
  if (!localUser && !googleUser) {
    router.push("/Login");
    return;
  }

  addToCart(item, quantity);
};
//  useEffect(() => {
//   console.log("NextAuth status:", status);
//   console.log("NextAuth session:", session);
// }, [status, session]);

  return (
    <div>

      <Navbar />

      <div className="flex p-2 ">
       

        <div className="relative h-[35vh] w-[65vw] sm:h-[60vh] sm:w-[37vw] rounded-2xl  mr-6">

          <Image
            src={item.imge}
            alt={item.collename}
            fill
            sizes="37vw"
            className="rounded-2xl "
          />

        </div>


        {/* Product details */}
        <div className=" h-[50vh]  sm:h-[60vh]  rounded-2xl ">

          <h1 className=" sm:text-3xl lg:text-4xl text-xl  font-bold p-1 sm:p-10">
            {item.collename}
          </h1>

          <h2 className="  sm:text-2xl text-sm lg:text-3xl  sm:font-semibold p-2 sm:p-6 text-justify ">
            {item.description}
          </h2>

          <h3 className="p-6     text-lg font-bold">
            Price: ${item.price}
          </h3>


          {/* Quantity */}
          <div className="flex gap-2 items-center font-bold  text-2xl sm:text-3xl lg:text-4xl sm:gap-7 ">

            <button
              className="w-20 sm:w-30   bg-gray-400   rounded-2xl "
              onClick={() =>
                setquantity(quantity > 1 ? quantity - 1 : 1)
              }
            >
              -
            </button>

            <h1>{quantity}</h1>

            <button
              className="w-20 sm:w-30   bg-gray-400  rounded-2xl "
              onClick={() => setquantity(quantity + 1)}
            >
              +
            </button>

            <span>Quantity</span>

          </div>


          {/* Buttons */}
          <div className="flex  mt-5 sm:mt-8 gap-2 sm:text-2xl text-xl ">

            <Link
              className="  bg-gray-300 rounded-2xl  w-20 sm:w-40 sm:p-2 text-center"
              href="/allcollection"
            >
              Back
            </Link>

            <Link
              className="  bg-gray-300 rounded-2xl w-20 sm:w-40 sm:p-2 text-center "
              href="/cart"
            >
              Buy Now
            </Link>

            <button
              className=" bg-gray-300 rounded-2xl w-20 sm:w-40 sm:p-2 text-center  "
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

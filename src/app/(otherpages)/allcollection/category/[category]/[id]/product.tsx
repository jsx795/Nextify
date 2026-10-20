"use client";

import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/(otherpages)/context/CartContext";
import Footer from "@/app/_components/footer";
import { useRouter } from "next/navigation";
import { signIn, useSession,signOut } from "next-auth/react";


export default function Product({ item }: any) {
  const { data:session} = useSession();

  const router = useRouter();

  const [quantity, setquantity] = useState(1);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    
    // const user = localStorage.getItem("user");
    if(!session?.user){
      router.push("/Login");
      return;
    }
    

    addToCart(item, quantity);
  };

  return (
    <div>

      <Navbar />

      <div className="flex p-2 ">
       

        {/* Image */}
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
              className="w-10 sm:w-20   bg-gray-400   rounded-2xl "
              onClick={() =>
                setquantity(quantity > 1 ? quantity - 1 : 1)
              }
            >
              -
            </button>

            <h1>{quantity}</h1>

            <button
              className="w-10 sm:w-20   bg-gray-400  rounded-2xl "
              onClick={() => setquantity(quantity + 1)}
            >
              +
            </button>

            <span>Quantity</span>

          </div>


          {/* Buttons */}
          <div className="flex mt-5 gap-2 ">

            <Link
              className="  bg-gray-300 rounded-2xl  w-10 sm:w-20 sm:p-2 text-center"
              href="/allcollection"
            >
              Back
            </Link>

            <Link
              className="  bg-gray-300 rounded-2xl w-19 sm:w-20  text-center "
              href="/Login"
            >
              Buy Now
            </Link>

            <button
              className=" bg-gray-300 rounded-2xl w-24 sm:w-20  text-center  "
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

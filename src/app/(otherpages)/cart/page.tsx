"use client";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/footer";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total,item)=>total+item.price*item.quantity,0)

  return (
    <div className=" ">
        <Navbar />
        <div className="">
      <div className="">
        <h1 className=" sm: sm:text-2xl lg:3xl text-xl lg:3xl text-xl font-bold p-6 ">My Cart</h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-2  ">
           {cart.map((item:any) => (
         <div key={item.id}>
        <div className="flex justify-between relative  gap-2  items-center rounded-2xl   bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] p-7 ">
          <div className="flex justify-center font-bold p-4 "> 
            <div className="h-[30vh] w-[15vw] relative" >
               <Image 
                className="rounded-md "
                src={item.imge}
                alt={item.collename}
                fill
                sizes="15vh"
                />
              </div>
          <div className="p-4 ">
            <h1>{item.collename}</h1>
            <h2>{item.price}</h2>
            <h2>quantity: {item.quantity}</h2>
          </div>
          <div>
            <button className="right-5 top-3  absolute  sm:text-3xl lg:4xl text-2xl  font-bold bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] px-4   py-2 rounded-full " onClick={()=>removeFromCart(item.id)}>X</button>
          </div>
          </div>
        </div> 
                   <div className="p-1 bg-white w-full "></div>
        </div>
      ))} 
        </div>     
      <div>
      </div >   
      </div>        
 </div>
 <div className="flex items-center ">
   <h2 className=" sm:text-3xl lg:4xl text-2xl  font-bold p-9">Total Price: {totalPrice}</h2>
             <div className="p-5 ">
                           <Link className="bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]    sm:text-3xl lg:4xl text-2xl  px-6 py-2 rounded-2xl " href={"/cart/checkout"}>Checkout</Link>
             </div>
 </div>   
     <Footer />
     </div>
  );
}

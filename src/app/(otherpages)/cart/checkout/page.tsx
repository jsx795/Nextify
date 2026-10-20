"use client";
import Navbar from "@/app/_components/Navbar";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Footer from "@/app/_components/footer";

export default function checkout(){
    const { cart} = useCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    const totalP = cart.reduce((total,item)=>total+item.price-599.90,0)

    
    const [fullname, setfullname] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [postalcode, setpostalcode] = useState("")
    const [country, setcountry] = useState("")
    const formhandler = (e:any) => {

        e.preventDefault();
        setaddress("")
        setfullname("")
        setcity("")
        setcountry("")
        setpostalcode("")

        window.location.href = "/cart/checkout/paymentmethod";

    }
    return(
        <div className="w-screen h-screen">
            <Navbar />    
            <div className="grid grid-cols-1  sm:grid-cols-2  justify-center items-center gap-5  bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79]"> 
                <div className=" sm:w-[60vw] ">

                <h1 className="p-8  sm:text-3xl lg:4xl text-2xl  font-bold">Shipping Address</h1>

                <div className="flex justify-center items-center ">
                 <form className="flex flex-col p-6  gap-2  font-semibold  sm: sm:text-2xl lg:text-3xl text-xl lg:3xl  " onSubmit={(e)=>{
                    formhandler(e);
                 }} method="POST" >
                   
                <label className="   text-lg font-semibold" >Full Name</label>
                <input className="outline-none px-8 w-90 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setfullname(e.target.value)}} type="text" value={fullname} placeholder="Enter your Name.." />
                <label className="   text-lg font-semibold"  >Address</label>
                <input className="outline-none w-90 px-8 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setaddress(e.target.value)}} type="text" value={address} placeholder="Enter Your Address..." />
                <label className="   text-lg font-semibold" > City</label>
                <input className="outline-none w-90 px-8 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setcity(e.target.value)}} type="text" value={city} placeholder="Enter Your City......" />
                <label className="   text-lg font-semibold"  >Postal Code</label>
                <input className="outline-none w-90 px-8 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setpostalcode(e.target.value)}} type="text" value={postalcode} placeholder="Enter Your Postal Code...." />
                <label className="   text-lg font-semibold"  >Country</label>
                <input className="outline-none w-90 px-8 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setcountry(e.target.value)}} type="text" value={country} placeholder="Enter your Country....." />

                <button className="outline-none w-90 mt-5 px-8 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " type="submit">Next</button>
            </form>
            </div>
            </div>


             <div className="p-3 flex flex-col sm:p-10 sm:w-[40vw] justify-center items-center  ">
                    <h1 className=" sm:text-4xl lg:text-5xl text-3xl font-bold">Summary </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 mt-5  gap-2 h-full ">
                      {cart.map((itema:any)=>(
                      <div key={itema.id} className="">

                         <div className="h-[30vh] w-[15vw] sm:h-[20vh] sm:w-[8vw] relative " >
                          <Image 
                          alt={itema.collename}
                          src={itema.imge}
                          sizes="8vw"
                          fill
                          className="rounded-md "
                          />
             
                        </div>
                        <h1 className="  sm:text-2xl lg:3xl text-xl lg:text-3xl  font-semibold ">{itema.collename}</h1>
                          
                   
                      </div>
                     ))}
                    </div>
                    <div className="flex flex-col p-10">
                        <div className="flex justify-between font-semibold    text-lg "><h1>Subtotal</h1> <h1>${totalPrice}</h1></div>
                        <div className="flex justify-between font-semibold    text-lg "><h1>Shipping</h1><h1>$0.00</h1></div>
                        <div className="flex justify-between font-semibold    text-lg"><h1>Discount</h1> <h1>-$599.90</h1></div>
                        <div className="flex justify-between font-bold p-5   sm:text-3xl lg:4xl text-2xl  "><h1>Total</h1><h1>${totalP}</h1></div>
                    
                     </div>
                    
            </div>        
           
            </div>
                     
                     
                       
            <div>
                </div>  

            <Footer />
           
        </div>
    )
}
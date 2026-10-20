"use client";
import Navbar from "@/app/_components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function paymentmethod(){
    const [email, setemail] = useState("")
    const [cardinfo, setcardinfo] = useState("")
    const [mmyy, setmmyy] = useState("")
    const [cvc, setcvc] = useState("")
    const [cardhildername, setcardhildername] = useState("")
    const [country, setcountry] = useState("")

     const formhandler = (e:any) => {
        e.preventDefault();
        console.log(country);


        setemail("")
        setcardinfo("")
        setmmyy("")
        setcvc("")
        setcountry("")
        setcardhildername("")

        window.location.href = "/cart";

    }
    return(
        <div className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] h-screen">
            <Navbar />
            <div className="flex justify-center items-center ">
                <form className="p-2 sm:p-4  flex flex-col justify-center gap-2  sm:text-2xl  lg:text-3xl text-xl font-semibold" onSubmit={(e)=>{formhandler(e)}
            }>
                <h1 className="p-4 ml-16 sm:ml-2 sm:text-2xl  lg:text-3xl text-xl font-bold ">Pay With Card</h1>
                <label className="ml-16 sm:ml-2">Email</label>
                <input className="outline-none shadow-[#a4a1b9] shadow-2xs px-4 w-89  ml-8 sm:ml-2 sm:w-full   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] shadow-[#a4a1b9] shadow-2xs py-2 rounded-2xl " onChange={(e)=>{setemail(e.target.value)}} value={email} type="text" placeholder="Enter your Email..." />
                <label className="ml-16 sm:ml-2">Card Information</label>
                <input maxLength={16} minLength={16}  className="outline-none w-89  ml-8 sm:ml-2 sm:w-full  shadow-[#a4a1b9] shadow-2xs px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setcardinfo(e.target.value)}} value={cardinfo} type="text" placeholder="1234 1234 1234 1234 " />
                <div className="flex mt-3">
                    <input  className="outline-none  shadow-[#a4a1b9] shadow-2xs px-4 w-42   ml-8 sm:ml-2 sm:w-full   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setmmyy(e.target.value)}} value={mmyy} type="text" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" maxLength={5} required  placeholder="MM/YY"  />
                    <input maxLength={3} minLength={3} className="outline-none  w-42  ml-2 sm:ml-2 sm:w-full  shadow-[#a4a1b9] shadow-2xs px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " onChange={(e)=>{setcvc(e.target.value)}} value={cvc} placeholder="CVC" type="text" />
                </div>
                 <label className="ml-16 sm:ml-2" >Cardholder Name</label>
                <input className="outline-none shadow-[#a4a1b9] shadow-2xs  px-4 w-89  ml-8 sm:ml-2 sm:w-full    bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl "  onChange={(e)=>{setcardhildername(e.target.value)}} value={cardhildername} type="text" placeholder="Cardholder name...." />
                <label className="ml-16 sm:ml-2">Country</label>
                <select className="outline-none px-4 w-89  ml-8 sm:ml-2 sm:w-full  shadow-[#a4a1b9] shadow-2xs bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl "  onChange={(e)=>{setcountry(e.target.value)}} value={country} name="country" id="country">
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="india">India</option>
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="india">India</option>
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="China">China</option>
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="Japan">Japan</option>
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="Germany">Germany</option>
                    <option className="outline-none px-4   bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " value="Pakistan">Pakistan</option>
                </select>
               
               
              <Link className="outline-none  text-center px-4 w-89  ml-8 sm:ml-2 sm:w-full    bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl  mt-6 shadow-[#a4a1b9] shadow-2xs hover:bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79]" href={"/cart/paymentsuccessfull"}>Pay</Link>
            </form> 
            </div>
           
        </div>
    )
}
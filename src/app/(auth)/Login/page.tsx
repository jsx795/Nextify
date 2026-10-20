"use client";



import Link from "next/link";
import Navbar from "@/app/_components/Navbar";
import Main from "@/app/_components/Main";
import Footer from "@/app/_components/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login(){

   const router = useRouter();
   const [name, setname] = useState("");
   const [password, setpassword] = useState("");



   async function formhandler(e:any) {
    e.preventDefault();

    const response = await fetch("/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name,password,
        })
    })
    const data = await response.json();

    // if(response.ok){    
    //     localStorage.setItem("user", JSON.stringify(data));
    //     router.push("/allcollection");
    // }else{
    //     alert(data.message || "Invalid email or password");
    // }
    setname("");
    setpassword('');
}    
    return(
        <div >
           <Navbar />
                      <div className="flex bg-gradient-to-l from-white to-[#bcb7b9] relative ">
                        
                          <Main />

                          <div className="flex justify-center items-center w-[65vw] bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]">

                         
                           <div className="flex items-center  justify-center flex-col   sm: sm:text-2xl lg:3xl text-xl lg:3xl text-xl">

                              <form onSubmit={formhandler} action="/" className="flex flex-col  gap-3">
                              <h1 className=" sm:text-5xl lg:6xl text-4xl font-bold p-3">Login to your account</h1>
                                  <h1 className="font-semibold    text-lg">Username</h1>
                                  <input onChange={(e)=>setname(e.target.value)} value={name} required className="outline-none px-4      text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl " type="text" placeholder="Enter Username..." />
                                  <h1 className="font-semibold    text-lg">Password</h1>
                                  <input onChange={(e)=>setpassword(e.target.value)} value={password} minLength={8} maxLength={12} required className="outline-none px-4      text-lg bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] py-2 rounded-2xl  mb-3" type="password" placeholder="Enter Password" />
                                  <button className="   text-lg font-bold bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] rounded-2xl  py-2 hover:bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]">Log In</button>
                              </form>
                                 <h1 className="flex p-4     text-lg font-semibold">New Here? <Link className="text-gray-700  hover:text-white" href={"/register"}>Create Account</Link></h1>

                          </div> 

                                  
                           
                            </div>

                      </div>
                      <Footer />
        </div>
    )
}
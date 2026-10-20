import Navbar from "@/app/_components/Navbar";
import Link from "next/link";

export default function paymentsuccessfull(){
    return(
        <div>
            <Navbar />
            <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79]">
                <div className="bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] rounded-2xl   flex flex-col items-center justify-center   text-3xl p-2 sm:p-7 w-[80vw] font-bold ">
                <h1>Payment Successfull!</h1>
                <p className="text-center  sm:text-2xl text-sm lg:text-3xl  font-semibold ">Your payment has been processed succesfully, You will receive a confirmation email shortly.</p>
                <Link className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] rounded-full px-7  py-2 mt-4  " href={"/allcollection"}>Ok</Link>
                </div>
           

             </div>
        </div>
       
    )
}
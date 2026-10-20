import Link from "next/link"
import Main from "./Main";
import Image from "next/image";
export default function FullMain(){
    return(
        <div className="flex h-full w-full">
            <div className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] h-[80vh] w-[65vw] justify-center flex  items-center">

                <div className="h-[40vh] w-[70vw] p-4    text-lg justify-center flex items-center">
                    <div>
                        <h2>NEW SEASON</h2>
                        <h1 className="text-4xl sm:text-7xl font-bold">Refined.</h1>
                        <h1 className="text-4xl  sm:text-7xl font-bold">Modern.</h1>
                        <h1 className=" text-3xl  sm:text-5xl font-bold">Effortless.</h1>
                        <p className="text-justify font-semibold text-sm sm:text-xl mb-6  ">
                         Timeless pieces. 
                         Contemporary silhouttes. 
                         Made to elevate your everyday.</p>
                       <Link className="bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] hover:bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] px-5 sm:px-7 py-1  rounded  sm:text-2xl lg:3xl text-xl   border-r-1 border-r-[#7e7b80] " href={"/Login"}>SHOP NEW IN</Link>
               
                    </div>
                   </div>

                
            </div>
            

            <Main />
 
        </div>
    )
}
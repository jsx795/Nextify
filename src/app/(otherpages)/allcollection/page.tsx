import Maincolle from "@/app/_components/maincolle";
import Breakline from "@/app/_components/breakline";
import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Footer from "@/app/_components/footer";
import Link from "next/link";
import collection from "./collection";

export default async function allcollection(){ 
     
    return(
        <div>
            <Navbar />
            <Maincolle />
            <Breakline />
            <div className=" bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]">
                <div className="flex flex-1 justify-between p-4  ">
                    <h1 className="p-4  sm:text-3xl lg:text-4xl text-2xl  font-bold px-10">All Collection</h1>
                </div>
                        <div className=" grid grid-cols-2 sm:grid-cols-4  gap-2">
                                      {
                                        collection.map((links)=>{
                                            return(
                                                 <div className="flex items-center justify-center" key={links.id}>

                                                    <Link href={`/allcollection/category/${links.category}/${links.id}`}>


                                                    <div className="relative w-[34vw] sm:w-[20vw] sm:h-[50vh] h-[50vh] rounded" key={links.id}>
                                                    <Image 
                                                     src={links.imge}
                                                     fill
                                                     alt="images..."
                                                     sizes="20vw"
                                                     className="object-cover rounded-md"
                                                    />
                                                  
                                                </div>
                                                <div>
                                                    <h1 className="   text-lg font-bold">{links.collename}</h1>
                                                    <h2 className="font-semibold text-lg">Price: {links.price}$</h2>
                                                </div>
                                                
                                                    </Link>
                                                    
                                                </div>
                                                  )
                                        })
                                    }  
                                    </div> 
            
                    </div>
                    <Breakline />
                    <Footer />


        </div>
    )
}
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
export default function maincolle(){
    const colle = [
        {collename:"SHIRTS", imge:"/images/shirt1.jpg", id:2,href:"/allcollection/category/shirts"},
        {collename:"PANTS", imge:"/images/pant.jpg", id:3,href:"/allcollection/category/pants"},
        {collename:"OUTWEAR", imge:"/images/outwear.jpg", id:4,href:"/allcollection/category/outwear"},
        {collename:"T-SHIRTS", imge:"/images/tshirt1.jpg", id:5,href:"/allcollection/category/t-shirts"},
    ]
    return(
        <div className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] px-1 py-5 sm:px-3 sm:py-7 relative w-full">
            <div className="">
               <h2 className="text-center font-semibold  text-xl sm:text-2xl lg:text-3xl">SHOP BY CATEGORY</h2>
               <h1 className="text-center  sm:text-3xl lg:text-4xl text-3xl  font-bold p-3">Explore Our Collections</h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2  sm:gap-5 lg:gap-6  mt-4 relative ">
              {
                colle.map((links)=>{
                    return(
                        <div className=" w-[40vw] h-[50vh] sm:w-[24vw] sm:h-[60vh] sm:ml-1  flex justify-center flex-col items-center " key={links.id}>
                            <Link href={links.href}> 
                            <div className="relative  w-[30vw] h-[40vh] sm:w-[20vw] sm:h-[50vh] rounded" key={links.id}>
                            <Image 
                            src={links.imge}
                            fill
                            alt="images..."
                            sizes="20vw"
                            className="object-cover rounded-md"
                            />
                          
                           </div>
                         <h1 className="font-bold text-center text-xl sm:text-2xl lg:text-3xl ">{links.collename}</h1>
                  
                           
                            </Link> 
                            <Link className="flex gap-2  justify-center text-sm sm:text-xl lg:text-2xl" href={links.href}>Shop Now <ArrowRight /> </Link>

                        </div>
                          )
                })
            }  
            </div> 
            </div>
            
            
        </div>
    )
}
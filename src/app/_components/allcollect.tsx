import Link from "next/link";
import Image from "next/image";
import collection from "../(otherpages)/allcollection/collection";

export default async function allcollect(){ 
    return(
        <div className="flex flex-col pl-9 bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] pb-5 w-full">
            <h1 className="p-4 lg:text-5xl sm:text-3xl text-2xl font-bold px-10 ">All Collection</h1>
            <div className="grid  grid-cols-2 sm:grid-cols-4  justify-center items-center  ">
                          {
                            collection.map((links)=>{
                                return(
                                    <div className="" key={links.id}>
                                        <Link href={`allcollection/category/${links.category}/${links.id}`}>
                                         
                                        <div className="relative w-[40vw] sm:w-[20vw] sm:h-[50vh] h-[50vh] rounded" key={links.id}>
                                        <Image 
                                        src={links.imge}
                                        fill
                                        alt={links.collename}
                                        sizes="20vw"
                                        className="object-cover rounded-md"
                                        />
                                      
                                    </div>
                                    <div>
                                        <h1 className=" sm:text-3xl lg:4xl text-2xl  font-bold">{links.collename}</h1>
                                        <h2 className="font-semibold  text-sm sm:text-xl lg:text-2xl ">Price: {links.price}$</h2>
                                    </div>
                                       </Link>
                                    </div>
                                      )
                            })
                        }  
                        </div> 

        </div>
    )
}
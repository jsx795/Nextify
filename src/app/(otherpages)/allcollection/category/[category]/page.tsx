import collection from "../../collection";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import Maincolle from "@/app/_components/maincolle";
import Footer from "@/app/_components/footer";


export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {

  const { category } = await params;

  const products = collection.filter(
    (item) =>
      item.collename.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
        <Navbar/>
        <Maincolle />
        
        
         <div className="bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79]  relative ">
               <h1 className=" sm:text-4xl lg:5xl text-3xl font-bold p-6 ">{category}</h1>
               <div className="grid grid-cols-3 lg:grid-cols-4 gap-5  pb-20 ">
                 {
                   products.map((links)=>{
                       return(
                           <div className="" key={links.id}>
                            
                               <Link href={`/allcollection/category/${links.category}/${links.id}`}> 
                               <div className="flex flex-col items-center">
                                 <div className="relative w-[20vw] h-[50vh] rounded" key={links.id}>
                                   <Image 
                               src={links.imge}
                               fill
                               alt="images..."
                               sizes="20vw"
                               className="object-cover rounded-md"
                               />
                             
                                 </div>
                            <h1 className="font-bold text-center    text-lg">{links.collename}</h1>
                     
                               </div>
                              
                              
                               </Link> 
   
                           </div>
                             )
                   })
               }  
               </div> 
               </div>
               <Footer />
    </div>
   
               
               
  );
}
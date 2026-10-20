import Image from "next/image";

export default function latestimg(){
    return(
       <div className="relative h-[90vh] w-[40vw]  ">
                   <Image
                   src="/images/mainsecimage.jpg"
                   fill
                   sizes="40vw"
                   alt="main content image"
                   className="object-cover"
                   />
        </div>
    )
}
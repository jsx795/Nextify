import Image from "next/image";

export default function maincontent(){
    return(
        <div className="">
            <Image 
            src="/public/images/homeImage.jpeg"
            width={500}
            height={500}
            fill
            alt="Picture of the author"
            />
        </div>
    )
}
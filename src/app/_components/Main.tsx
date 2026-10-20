import Image from "next/image"
export default function Main(){
    return(
        <div className="relative h-[80vh]  w-[35vw]">
            <Image
            src="/images/mainimage.jpg"
            fill
            sizes="30vw"
            alt="main content image"
            />
        </div>
    )
}
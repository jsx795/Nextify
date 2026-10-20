import Latestimg from "./latestimg"

export default function latestcolle(){
    return(
        <div className="flex">

            <Latestimg />

            <div className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] " >
                <div className="h-[90vh] w-[60vw]">
                    <h2 className="p-1 sm:p-2  font-semibold    text-lg">OUR STORY</h2>
                    <div className="flex flex-col mt-[7%] sm:mt-[10%]">
                        <div className="text-2xl sm:text-7xl lg:text-8xl font-bold px-2 0 py-2">
                           <h1>Crafted for Quality.</h1>
                           <h1>Designed for You.</h1>
 
                        </div>
                        <p className="font-semibold text-xl sm:text-2xl mt-9 p-10 sm:p-15 lg:p-18 lg:text-3xl px-10 text-justify ">At North & Co.., we believe in timeless style, premium fabrics, and attention to detail. Every piece is made to evaluate how you look and feel.</p>

                    </div>
                        
              
                      </div>

            </div>
        </div>
    )
}
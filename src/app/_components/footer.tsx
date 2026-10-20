import Link from "next/link"
export default function footer(){
    return(
        <div className="bg-gradient-to-l from-[#a4a1a5] to-[#8f8a79] p-9 pb-15 sm:pb-10 ">
            <h2 className=" sm:text-2xl lg:4xl text-3xl  font-bold p-2 ">Question? Call <a href="">000-900-500-2345</a></h2>
            <div className="grid grid-cols-3 gap-4  px-[3%] sm:px-[6%]    text-sm sm:text-2xl font-semibold ">
                <Link href="">FAQ</Link>
                <Link href="">Account</Link>
                <Link href="">Investor Relation</Link> 
                <Link href="">Ways to Wtch</Link>
                <Link href="">Privacy</Link>
                <Link href="">Corporate Information</Link>
                <Link href="">Speed Test</Link>
                <Link href="">Only on NEXTIFY</Link>
                <Link href="">Help Center</Link>
                <Link href="">Media Centre</Link>
                <Link href="">Jobs</Link>
                <Link href="">Terms of Use</Link>
                <Link href="">Cookies Preferences</Link>
                <Link href="">Contact Us</Link>
                <Link href="">Legal Notices</Link>
            </div>
            <h3 className="font-bold mt-15  sm:text-3xl lg:4xl text-2xl ">NEXTIFY INDIA</h3>
            <h3 className="font-semibold    text-lg">This page is protected by Google reCAPTCHA to ensure you're not a bot.</h3>
     

        </div>
    )
}
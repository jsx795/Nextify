"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../(otherpages)/context/CartContext";
import { signIn, useSession,signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { User } from "lucide-react";

export default  function Navbar(){
    const { data:session, status } = useSession();
   
     async function handleLogout() {
          await signOut({ callbackUrl: "/Login" });
    }
      const { cart } = useCart();
      const totalQuantity = cart.reduce((total, item) => total + item.quantity,0);

    
     

    return<>
    <div>
        <div className="flex items-center w-full gap-[10%] py-3 px-8 sm:py-1  bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] ">

        <h1 className=" text-3xl sm:text-4xl lg:text-5xl  font-bold">NEXTIFY</h1>
        <input className="px-1  outline-none  text-sm sm:text-xl lg:text-2xl " type="text" placeholder="Search......." />
       
            
            

         </div>
        <div className="flex text-sm sm:text-xl lg:text-2xl  w-full bg-gradient-to-r from-[#a4a1a5] to-[#8f8a79] gap-10 sm:gap-5 sm:mr-1 mr-3 font-semibold justify-end  items-center">

            <Link className=" hover:text-gray-200 active:text-white" href={"/"}>Home</Link>
            <Link className=" hover:text-gray-200 active:text-white " href={"/allcollection"}>All Collection</Link>
            {
                cart.length > 0 ? ( <Link href={"/cart"} className="flex items-center gap-1"> <ShoppingCart/> Cart <span className="bg-gray-500 mb-4 text-white px-3 py-1  rounded-2xl  ">{totalQuantity} </span> </Link>): 
                                  (<Link className="flex items-center  hover:text-gray-200 active:text-white " href={"/cart"}><ShoppingCart/>Cart</Link> ) 
            }

           

            {
                status === "loading" ? ( <span>Loading....</span>) : session?.user ? ( 
                    <button onClick={handleLogout} className=" hover:text-gray-200   active:text-white">Logout</button>
                ) : (
                    <Link className=" hover:text-gray-200 active:text-white" href={"/Login"}>Login</Link>
                )

            }
            {
                session?.user?.name ? (
                     <div className="flex gap-4  items-center">
                         <p className="flex "><User/>{session?.user?.name}</p>
                     </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    </div>
    

    </>
}
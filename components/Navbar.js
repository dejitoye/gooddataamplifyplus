import React from 'react'
import Link from "next/link"
import { BellIcon, ChevronDoubleLeftIcon, InboxIcon, InboxInIcon, LightBulbIcon, MailIcon, MoonIcon, SearchCircleIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/outline";

function Navbar() {
    return (
        <nav className="flex bg-red-400">
            <div className="">
<h1> Deji</h1>


            </div>
            {/* <Link href="/"> <a> Home </a> </Link>  */}
            <Link href="/"> Home  </Link> 
            <Link href="/about"> about  </Link> 
            <Link href="/deji"> dejilink  </Link> 
           
{/* <Link href="/about"> <a> About </a> </Link> 
<Link href="/deji"> <a> deji list </a> </Link>  */}

        </nav>
    )
}

export default Navbar

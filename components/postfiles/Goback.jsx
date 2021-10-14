import { ArrowLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import Link from "next/link"



function Goback() {
    return (
        <div className="flex w-full  bg-white mb-4 my- p-4  dark:bg-dark-coolbg">
        <button className=""> 
        <Link className="flex items-center dark:text-dark-txt  text-green-400" to="/">
            <ArrowLeftIcon className="h-4 w-8"/> <span> Discussions</span></Link>
           </button>  
        </div>
    )
}

export default Goback

import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import React from 'react'

function CommentInput() {
    return (
        <div className=" flex border-1 border my-2 rounded-r-full ">
         
               <div className=" w-full flex pl-2 rounded-r-full ">
           <input type="text"  placeholder="write a comment...." className="w-full outline-none dark:bg-gray-800 dark:text-gray-100"/> 
           <button className="rounded-r-full bg-green-500 px-2 py-1 border border-purple-200 hover:bg-green-700 text-gray-100 dark:text-gray-50">send</button>
           {/* <ChevronDoubleLeftIcon/> */}
          
           </div>
        </div>
    )
}

export default CommentInput

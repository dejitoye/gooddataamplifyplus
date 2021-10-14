import { SearchCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { useState } from 'react'





function SearchForm({word,addinput}) {
    const [open, setOpen] = useState(false)

    const defaultOptions = []
for (let i=0; i<10; i++){
    defaultOptions.push(`option ${i}`);
    defaultOptions.push(`suggestion ${i}`);
    defaultOptions.push(`advice ${i}`);
}

const boxserch = ()=>{
    setOpen(true)
}
    return (
        <div className=" relative bg-gray-400 rounded-full  md:w-72 ">
            <div className="flex rounded-full bg-gray-100">
         <input onChange ={addinput}  onClick={boxserch} value={word} type="text" className=" outline-none bg-transparent ml-2 rounded-lg bg-gray-100 w-full" />
         <SearchCircleIcon onClick={()=>console.log("search button ")} className="h-6 w-6 md:hidden "/>
         </div>
         {/* <div className="">
             {defaultOptions.map((option)=>{
                 return (
                     <button className=" flex rounded-t-none absolute bg-red-50  p-6"> {option}</button>
                 )
             })}
         </div> */}
        { open&&<div className="absolute bg-gray-50 w-full mt-1 md:mt-2 ">
             <h1> hello</h1>
             <h1> hello</h1>
         </div>}
        </div>
    )
}

export default SearchForm

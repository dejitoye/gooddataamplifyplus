import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function WritePost() {
    const modal = useSelector(state => state.utils)
    console.log(modal)
    const dispatch = useDispatch()
    const openModal =()=>{
        dispatch({type:"OPENMODAL"})
    }
  return (
    <div
      className="bg-green-400 bottom-14 right-5   lg:bottom-40 lg:right-56 z-10
         fixed flex-col  flex justify-center items-center rounded-full p-2 "
    >
      <button onClick={openModal } >
       
        <PencilAltIcon className="h-12 w-12 text-white border-green-100 border rounded-full" />
      </button>
      {/* <span className="text-xs"> write a post</span> */}
    </div>
  );
}

export default WritePost;

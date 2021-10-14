import React from "react";
import { useDispatch, useSelector } from "react-redux";

function InputPost() {
    const modal = useSelector(state => state.utils)
    console.log(modal)
    const dispatch = useDispatch()
   
  return (
    <div className=" bg-white h-screen fixed inset-0 mt-14 bg-opacity-70  flex items-center justify-center p-4">
      <div className="flex  flex-col bg-green-800 rounded-lg  shadow-lg lg:w-1/3 lg:mr-72 mb-64   ">
        <div className="border-b border-green-400 text-green-400 w-full">
          <button className="p-4" onClick={()=>dispatch({type:"CLOSEMODAL"})}>X</button>
        </div>
        <div className="relative p-4 pl-20 ">
          <img
            src="https://placekitten.com/g/50/50"
            alt=""
            className="absolute top-0 left-0 ml-4 mt-4  rounded-full"
          />
<div>
    <input type="text" placeholder="Title not more than 120 " className="bg-transparent pt-4 w-full text-white text-lg outline-none overflow-hidden" />
          {/* <textarea placeholder="post discussion" className="bg-transparent pt-4 w-full text-white text-lg outline-none" > </textarea> */}
          <textarea
            placeholder="post discussion"
        
            name=""
            // id=""
            // cols="30"
            // rows="10"
            className="bg-transparent pt-4 w-full text-white text-lg outline-none overflow-hidden"
          />
          </div>
        </div>
        <div className="pl-20 pb-3 flex justify-between p-2" > 
        <div> icons </div>

        <button className="bg-green-400 rounded-full text-green-50 py-1 px-4"> button</button>
        </div>
      </div>
    </div>
  );
}

export default InputPost;

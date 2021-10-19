import { API,graphqlOperation,Auth } from 'aws-amplify'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/dist/client/router'

function IndividualChatRoom({chatroom,userid}) {
    // console.log("ccc",chatroom,userid)
    const router =useRouter()
const onChat =()=> {
router.push(`/messages/${chatroom.chatroomID}`)
}

// const check=chatroom.chatroom.LastMessage?.user?.id===userid.attributes.sub
    const display = ()=>{
       const id = userid.attributes.sub

       const chatusers = chatroom?.chatroom?.ChatRoomUsers?.items.filter(c=>c.user.id!== id)
      //  console.log("chhhhhd",chatusers)
//  We can map for group functions or isolate the user for individual 
// I went with mapping incase we want to mix both group and individual together 
// console.log(id)
     return (
         
        //  <Link href={`messages/${chatroom.chatRoomID}`}>
        <button className=" w-full">
<div onClick= {onChat}>
  
        <div className="flex items-center p-4 bg-gray-100 border-b justify-start space-y-4 mb-2 ">
  {/* begining of mapping users */}
  <div>{chatusers.map(m=>(<div key ={m.user.id} className="mb-2">
    <img src={ m.user?.pix} alt="" className=" h-14 w-14 rounded-full object-cover" />
    <div className="flex flex-col items-start">
               <h1 className="text-md font-semibold "> @{ m.user?.name}</h1>
               <p className="mb-2">status: {m.user?.status}</p>
             
               </div>
   
        </div>))} </div>
       {/*end of the mapping of users  */}
        <span> 
        {chatroom.chatroom?.newMessage}
        </span>
        <span> {chatroom.chatroom.LastMessage?.content}</span>
      
        </div>
        </div>
        </button>
     )
    }
    return (
        <div>
          {display()} 
        </div>
    )
}

export default IndividualChatRoom



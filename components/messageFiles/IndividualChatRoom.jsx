import { API,graphqlOperation,Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/dist/client/router'
import { DataStore, SortDirection } from '@aws-amplify/datastore';
import { Message } from 'src/models'
function IndividualChatRoom({chatroom,userid}) {
  const [count, setCount] = useState(0)
    // console.log("COUNT",count)
    const router =useRouter()
const onChat =()=> {
router.push(`/messages/${chatroom.chatroomID}`)
}

useEffect(() => {
  // this to get the number of unread msg using status delivery 
 const msgCount = async()=>{
const ccc = await (await DataStore.query(Message)).filter(f=>f.chatroomID===chatroom.chatroomID).filter(f=>f.user.id !== userid.attributes.sub && f.status==="DELIVERED")
// console.log("delivered",ccc,chatroom)
setCount(ccc.length)
 }
 msgCount()
}, [])

const check=chatroom?.chatroom?.LastMessage?.user?.id===userid.attributes.sub
// console.log("YESSSSSSSOOOOO",check)
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
      {!check &&  <span> {chatroom.chatroom.LastMessage?.content}</span>}
      <span> unread :{count}</span>
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




import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IndividualFriend from './IndividualFriend'
import {userss} from "../../dummydata/Users"
import IndividualListUsers from './IndividualListUsers'
import { API,graphqlOperation,Auth } from 'aws-amplify'
// import { listUsers } from 'src/graphql/queries'

import { useDispatch } from 'react-redux'
// import { createChatRoom, createChatRoomUser } from 'src/graphql/mutations'
import { useRouter } from 'next/dist/client/router'
import { DataStore } from '@aws-amplify/datastore';
// import { ChatRoom } from 'dummydata/ChatRooms'
import { User } from 'src/models'
import { ChatRoomUser } from 'src/models'
import { ChatRoom } from 'src/models'
function FriendsComponentList({friends,loading,userdata,roomdata}) {
    const [id, setId] = useState(null)
   const router= useRouter()
    // console.log("data",router)
const dispatch = useDispatch()




const createRoom=async(aaa)=>{
    const newChatRoom = await DataStore.save(new ChatRoom({newMessages:0,chatType:"SINGLE"}))
    // console.log("newroom",newChatRoom)
    const resultt= await Auth.currentAuthenticatedUser()
    const userId = { id: resultt.attributes.sub };
    const id = userId.id
    const userr= await DataStore.query(User,id)
// console.log(aaa,id,userr)
const chatuser = await DataStore.save(new ChatRoomUser({
    userID:userr.id,
    chatroomID:newChatRoom.id

}))
console.log("myuseroom",chatuser)
const chatusere = await DataStore.save(new ChatRoomUser({
    userID:aaa.id,
    chatroomID:newChatRoom.id

}))
const ddd =  (await DataStore.query(ChatRoomUser)).filter(f=>f.chatroom.id===newChatRoom.id&& f.user.id===aaa.id)
console.log("myfriendroom",ddd)
 dispatch  ({type:"FRIEND",payload:ddd})
router.push(`/messages/${newChatRoom.id}`)
    }
// clickMe was passed to child component IndividualListUsers
    const clickMe = async (aaa)=>{

        // steps to check if userchatroom exist
        // 1) query all chatroomuseers
        // 2)filter chatroom user belongs to
        // filter out the chatroomusers with chatroom id to get all chatroom users
        //  belonging to the chatroom owned by user
        // 3) step 2 would bring all chat room users including user,so filter out users excluding the user
        // 4) the onClick action would return empty or not the chatroom info that matches the user.
        const resultt= await Auth.currentAuthenticatedUser()
        const userId = { id: resultt.attributes.sub };
        const id = userId.id
console.log("assd",aaa)

// might load this on mount to prevent price hike cos it would alwasy run query
const chatroomusers= await DataStore.query(ChatRoomUser)
console.log("first",chatroomusers)
// we using SINGLE cos a user can belong to many group chat
// no point checking condidion for it 
const chatroomid =  chatroomusers.filter(f=>f.user.id===id&&f.chatroom.chatType==="SINGLE" ).map(m=>{
//    console.log("object",m)
return m.chatroom.id
})


const getUserChatroomInfo = chatroomusers.filter(a=>chatroomid.includes(a.chatroom.id) ).filter(m=>m.user.id!==id).filter(a=>a.user.id===aaa.id) 

  


// console.log("fetch",chatroomid)

// console.log("fetczzzzh",getUserChatroomInfo)

const value= getUserChatroomInfo.length=== 0
 if (!value){
     console.log("exist")
     dispatch  ({type:"FRIEND",payload:getUserChatroomInfo})
    router.push(`/messages/${getUserChatroomInfo[0].chatroom.id}`)
 }else{
     console.log("create a new chat ")
    createRoom(aaa)
    // dispatch  ({type:"FRIEND",payload:aaa}) 
 }
//  console.log("value",value)
 }
    



   
    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>
           
           {loading ? <h1>loading..... </h1>:  
           <div className ="mt-2">
             {friends.map(f=> <IndividualListUsers key={f.id} userslist = {f} clickMe={clickMe} userdata={userdata}/>)} 
           </div>
}
        </div>
        </div>
    )
}

export default React.memo(FriendsComponentList)

import React from 'react'
import SearchUtil from 'utils/SearchUtil'
// import {friends} from "data"
import IndividualMeassageFriend from './IndividualMeassageFriend'
import { useState } from 'react'
import { useEffect } from 'react'
import IndividualChatRoom from './IndividualChatRoom'
import Link from "next/link"
import { API, Auth, graphqlOperation } from 'aws-amplify'
// import { listUsers } from 'graphql/queries'
// import { getUserMe } from 'graphqlhooks/myqueries'
import { DataStore } from '@aws-amplify/datastore';
import { User } from 'src/models'
import { ChatRoomUser } from 'src/models'
import { ChatRoom } from 'src/models'

function MessageFriendsList() {
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    const [userdata, setUserdata] = useState([])
    const [chatroom, setChatroom] = useState([])
    // chatroom may not be needed
    // console.log("object",chatroom)
    // const [friends, setfriend] = useState([])
    // const [friendsz, setfriendz] = useState([])
    // const [friendId, setfriendId] = useState(null)
    // const [loading, setloading] = useState(false)
    // const [friendss, setfriendss] = useState([])
    const [id, setId] = useState(null)
    // useEffect(() => {
    //     console.log("friend rendered")
     
    //   userData()
    // }, [])

   


    useEffect(() => {
        // console.log("friend rendered")
      userlistPlusData()
    //   userData()
    }, [])





// this would set state for user and chatroom,chatroom maybe not needed
const userlistPlusData  = async()=>{
    const user = await Auth.currentAuthenticatedUser()
    setUserid(user)  
    setloading(true)
    // const aaa = await API.graphql(graphqlOperation(listUsers))
   
    // setfriend(aaa.data.listUsers.items.filter(f=>f.id !== user.attributes.sub))
    // setfriend(bbb.filter(f=>f.id !== user.attributes.sub))
    // const chatro = await (await DataStore.query(ChatRoomUser))

    const id = user.attributes.sub
    
  
    const chatrooms = await (await DataStore.query(ChatRoomUser)).filter(a=>a.user.id===user.attributes.sub).map(m=>m.chatroom)
const axe = await DataStore.query(ChatRoom)
    const chatroomss = await (await DataStore.query(ChatRoomUser)).filter(a=>a.user.id===user.attributes.sub).map(m=>m.chatroom.id)
   const fff = chatroomss.map ( m=>{
       const aaa =axe.filter(r=>r.id===m)
       console.log("aaaaa",aaa)
       return aaa
   })
   console.log("return",fff)
    const cha= await (await DataStore.query(ChatRoom))
 
    setChatroom(chatrooms)
   
    setloading(false)
   
}

   
    const userData = async()=>{
        const user = await Auth.currentAuthenticatedUser()
        console.log(user.attributes.sub)
        const id = user.attributes.sub
      setId(id)


    }
    

    return (
        <div className=" flex justify-center items-center p-2">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>
<div className="mt-4"> 
{/* <h1> {chatroom?.user?.name}</h1> */}
{chatroom?.map(m=>  <IndividualChatRoom key={m.id} chatroom= {m}/> )}

</div>
</div>
        </div>
    )
}

export default MessageFriendsList

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
import { Message } from 'src/models'
import { useSelector } from 'react-redux'

function MessageFriendsList({chatroom,userid}) {
    // console.log("walking",chatroom,userid)
    const [loading, setloading] = useState(false)
  
    const [userdata, setUserdata] = useState([])
    const [idd, setIdd] = useState(null)
    const [count, setCount] = useState([])
    // console.log("object",count)
     console.log("walking",chatroom)
    const [id, setId] = useState(null)
const msgcount = useSelector(state => state.message.msg)
 console.log("object",msgcount)
    useEffect(() => {
      const fetchCount = async()=>{
        const userid=  await Auth.currentAuthenticatedUser()
        setIdd(userid.attributes.sub)
        console.log(userid)
          chatroom.map(async a=>{ 
              console.log("asadrr",a)
            const ccc =(await DataStore.query(Message)).filter(f=>f.chatroomID===a.chatroomID)
            console.log("xcxcxcxc",ccc)
            setCount(ccc)
          })
       
      
      }
      fetchCount()
    }, [])
    useEffect(() => {
       
        // msgCount()
    }, [msgcount])
//     const msgCount =async (aaa)=>{
//         console.log("what is aaa",aaa)
       
//         // if (count){
//         const ccc = await (await DataStore.query(Message)).filter(f=>f.chatroomID===aaa?.chatroomID).filter(f=>f.user.id === userid.attributes.sub && f.status==="DELIVERED")
//         // const ccc= count.filter(f=>f.chatroomID===aaa?.chatroomID).filter(f=>f.user.id === idd && f.status==="DELIVERED")
// // return ccc
        
// const room = chatroom.map(e=>{

//     if(ccc[0]?.chatroomID===e.chatroomID){
//     //   setUserdata({ msgcount:ccc,...e})  
//     // return ({msg:ccc,...e})
//     }
    
//     console.log("eee",e)
// })

// console.log("abi beko",room)
//         console.log("delivered",ccc)
//         // }
//         // setCount(ccc)
//          }
    
// console.log("vvvvv",msgCount)

    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>
           <div> 
               <button className="rounded-md bg-gray-400 shadow-2xl px-2 py-1 m-2"> create group</button>
           </div>
        {!chatroom? <h1> loading</h1>: chatroom.length <=0 ? <h1> No chat friends</h1>: 
        
        <div>
            { chatroom?.map((c,i)=> 
                // <Link href={`/messages/${c.chatRoomID}`}>
                <IndividualChatRoom key = {i} chatroom = {c} userid={userid}    />
                // </Link>
                )}
             </div>}

          
        </div>
        </div>
    )
}

export default MessageFriendsList

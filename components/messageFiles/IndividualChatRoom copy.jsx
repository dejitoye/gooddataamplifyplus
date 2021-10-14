import { API,graphqlOperation,Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/dist/client/router'
import { DataStore } from '@aws-amplify/datastore';
import { User } from 'src/models'
import { ChatRoomUser } from 'src/models'
import { useDispatch } from 'react-redux'
import { ChatRoom } from 'src/models'
import { listChatRooms } from 'src/graphql/queries'

const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;

const  useNavigatorOnLine = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());

  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);

  React.useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return status;
};


function IndividualChatRoom({chatroom,userid,id}) {
    console.log("ccc",chatroom)
    const [checkUser, setCheckUser] = useState(false)
const [singleuser, setSingleUser] = useState([])
const [checkchatType, setCheckchatType] = useState(false)
const [loading, setLoading] = useState(false)
const [lastMessage, setLastMessage] = useState(null)
const [lastMessager, setLastMessager] = useState(null)
const [ide, setId] = useState(false)

console.log("chattype",lastMessage)
const dispatch = useDispatch()
const isOnline = useNavigatorOnLine();
console.log("isonline",isOnline)
const  dda= chatroom.id === lastMessage?.id
// console.log("dssds000",dda)
    // const check= chatroom.lastMessage?.user?.id===id
    console.log("check",singleuser)
    const router =useRouter()
const onChat =()=> {
router.push(`/messages/${chatroom.id}`)
dispatch  ({type:"FRIEND",payload:singleuser})
}

// const dddd = singleuser[0].user.name
// console.log("dsdsdsdsd",dddd)
useEffect(() => {
    
 const fetchUsers= async ()=>{
     setLoading(true)
    const user = await Auth.currentAuthenticatedUser()
    const ttt = await API.graphql(graphqlOperation(listChatRooms))
    console.log("ttttttt",ttt)
const fetch =  (await DataStore.query(ChatRoomUser)).filter(f=>f.chatroom.id===chatroom.id)
const chatrooM = await DataStore.query(ChatRoom,chatroom.id)
const chatrooMe = await (await DataStore.query(ChatRoom)).filter(f=>f.id===chatroom.id)
const chatro = await DataStore.query(ChatRoom)
console.log("saaaaa",chatrooM)
const checkuser = chatrooM?.LastMessage?.userID===user.attributes.sub
const ccc= fetch[0].chatroom.id===chatroom.id
setId(ccc)
setLastMessage(chatrooM)
console.log("crooooom",chatrooM)
console.log("dddddd",fetch)
const userdata= fetch.filter(f=>f.user.id!==user.attributes.sub )
// this is to display lastmessage or new message if its not user 

setCheckUser(checkuser)
// console.log("chek uaser",checkuser)
console.log("cgroup",userdata)
// setSingleUser(fetch.filter(f=>f.user.id!==user.attributes.sub && f.chatroom.chatType==="SINGLE"))
setSingleUser(userdata)

setCheckchatType(userdata.some(m=>m.chatroom.chatType==="GROUP"))
// dispatch  ({type:"FRIEND",payload:userdata})
setLoading(false)
 }
 fetchUsers()
}, [])





const dd = async(aaa)=>{
    if(aaa){
      const ddd = await DataStore.query(ChatRoom,(aaa.id))
      console.log("update",ddd)
      setLastMessage(ddd)
      
//   if (chatroom.id===aaa.id){
//     console.log("updateeerrrr")
//   }
//   setLastMessage(ddd)
    
    }
    
  }
  
    useEffect(() => {
      console.log("ran once ")
  const subscriptionss = DataStore.observe(ChatRoom).subscribe(msg => {
    console.log("subscription Chatroom",msg.model, msg.opType, msg.element)
  dd(msg.element)
  
  })
  return ()=>subscriptionss.unsubscribe
    }, []);
   
  
    

// we are going to map the users for scalability just incase we hv group present

  
    return (
        <div>
            {loading ? <span> loading</span>:
        <div onClick={onChat} className="w-full mt-2 border-b">
            
{singleuser.map(m=>(
<div key = {m.id} className={`${checkchatType?"bg-green-300":"bg-green-100"}`}> 
<button className="w-full ">
           {/* <button  className=""> */}
               <div className="flex items-center     justify-start ">
               <img src={m.user.pix} alt="" className="h-14 w-14 rounded-full object-cover" />
               <div className="flex flex-col items-start">
               <h1 className="text-md font-semibold "> @{ m.user?.name}</h1>
               <p className="mb-2">status: {m.user?.status}</p>
               <p> {m.chatroom.newMessage}</p>
               <p> {chatroom.id=== lastMessage?.LastMessage?.chatroomID&& checkUser&& lastMessage?.LastMessage?.content}</p>
               {/* <p> {m.chatroom.id===lastMessage.id && checkUser&& lastMessage?.LastMessage?.content}</p> */}
               </div>
               </div>
               </button>  

</div>

))}
<span> {singleuser?.user?.name}</span>
          {/* {display()}  */}

          <div>
          <p> {singleuser[0]?.id=== lastMessager?.id&& checkUser&& lastMessager?.LastMessage?.content}</p>
               </div>
        </div>
        }
        </div>
    )
}

export default IndividualChatRoom

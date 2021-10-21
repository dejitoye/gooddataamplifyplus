import { Auth } from 'aws-amplify'
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {User} from "../../src/models"
import IndividualMessageHeader from './IndividualMessageHeader';
import { BackspaceIcon, CheckIcon, MailIcon, MailOpenIcon, PencilAltIcon, ReplyIcon } from '@heroicons/react/outline';
import {useWindowScroll} from "react-use" 
import { Message } from 'src/models';
import MessageInput from './MessageInput';
import ReactScrollableFeed from "react-scrollable-feed"
import { ChatRoom } from 'src/models';
const ScrollToTop = ()=>{

}
function IndividualMessageDetails(props) {
// console.log("messageee",message)
const {replyMe,replyToMessage,replyMsg,resetMe,getMessage}= props
console.log("rrrreeeee",replyToMessage)
 const [users,setUsers] = useState(null)
 const [id,setId] = useState(null)
 const [user,setUser] = useState(null)
 const [message, setMessage] = useState(props.message)
 const [open, setOpen] = useState(false)
 const [ccc, setCcc] = useState(null)
 const [writeReply, setWriteReply] = useState("")
 
console.log("true user ",ccc)
console.log("WRITE A REPLY ",writeReply)

const sad = getMessage.find(g=>g.id===message.replyToMessageID)
console.log("GET REPLY ",sad)
const sendMessage = async()=>{
    const resultt= await Auth.currentAuthenticatedUser()
    const input={
      content:message,
      userID:resultt.attributes.sub,
      chatroomID:ccc.chatroomID,
      status:"SENT"
      }
      
    // const result = await API.graphql(graphqlOperation(createMessage,{input}))
    const result = await DataStore.save(new Message ({
  
      content:writeReply,
      userID:resultt.attributes.sub,
      chatroomID:ccc.chatroomID,
      replyToMessageID:ccc.id,
      status:"SENT",
    }))
    console.log("message sent",result,input)
    updateLastMessage(result)
    setWriteReply("")
    setOpen(false)
  }
  
  
  const updateLastMessage = async(aaa)=>{
    const resultt= await Auth.currentAuthenticatedUser()
    const input = {
      
      id:id,
      chatRoomLastMessageId:aaa.id,
      // newMessage:roomDetails.newMessage++,
      // userID:resultt.attributes.sub,
  
    }
  // const result =await API.graphql(graphqlOperation(updateChatRoom,{input}))
  const original = await DataStore.query(ChatRoom,id)
  const result = await DataStore.save(ChatRoom.copyOf(original,updateroom=>{
  updateroom.LastMessage=aaa
  }))
  // const result = await API.graphql({ query:updateChatRoom, variables: {input: inputt}});
  
  // console.log("result is :",result)
  }


const messageEndRef = useRef(null)

const scrollToBottom = ()=>{
    messageEndRef.current?.scrollIntoView({behavior:"smooth"})
}
useEffect(() => {
  scrollToBottom()
    
}, [message])
useEffect(() => {
    console.log("ran once ")
const subscription = DataStore.observe(Message,message.id).subscribe(msg => {
//   console.log("subscription",msg.model, msg.opType, msg.element)
  if(msg.model===Message && msg.opType==="UPDATE"){
    //   console.log("blabalbal",message)
    setMessage((message)=>({...message,...msg.element}))
    
    
  }
})
return ()=>subscription.unsubscribe
  }, []);
useEffect(() => {
   setMsgAsRead() 
}, [user,message])

const setMsgAsRead = async()=>{
    // console.log("uerssss",user)
if(user===false && message.status !=="READ"){
await DataStore.save(Message.copyOf(message,(updated)=>updated.status="READ"))
}
}

 useEffect(() => {
     const verify=async ()=>{
        const userid= await Auth.currentAuthenticatedUser() 
        // we use or msg.use.id cos d subscription brings diff value
if(message.userID === userid.attributes.sub|| message.user.id===userid.attributes.sub){
    setUser(true)
}else if (message.userID !== userid.attributes.sub|| message.user.id!==userid.attributes.sub){
setUser(false)
}
     }
  verify()
 }, [])
//  console.log("asx",users,id)
 useEffect(() => {
    //  this code is use to set the as subscription is trigered cos subscription doesnt give us the message user
    // console.log("dzxx",id)
    const userHeader = async()=>{
        const userid= await Auth.currentAuthenticatedUser() 

        const result =await DataStore.query(User,message.userID)
        setUsers(result)
const check = userid.attributes.sub=== message.userID
setId(check)
    }
userHeader()
   }, [message]);



   const replyFunce= (aaa)=>{
       resetMe()
    //    resetMessage()
    //    setOpen(!open)
       replyMsg(aaa)
       setWriteReply(aaa.content)
       setCcc(aaa)
//        if(ccc){
// console.log("exits ")
//        return null  
//        }else{
//            console.log("null")
//            setCcc(aaa)
//        }
    //    
   }

   const replyFunc= (aaa)=>{
       console.log("OPEN",open)
   setOpen(!open)
setCcc(aaa)
   }
const resetMessage = ()=>{
    setOpen(false)
    setCcc()
}

    return (
<ReactScrollableFeed> 
        <div className="p-2">
          
<div>

           
            <div  className= {` flex p-1 ${ !user&& "justify-end"}  group`}>
                <div>
          {sad&&  <div className=" bg-gray-400">
                <h6 className="text-xs ">reply to : </h6>
                <p className="text-xs"> {sad?.user.name}</p>
            <h6 className="text-xs "> content:{sad?.content}</h6>
           
            </div>}
                <div  className = {`flex items-center ${user && "bg-blue-200"} ${!user && "bg-green-200"} p-2 rounded-md `} >
        
         {/* {users&&   <img src={users?.pix} className=" h-8 w-8 rounded-full"/>} */}
       
        
            <img src={message.user?.pix} className=" h-8 w-8 rounded-full"/>
            <h1 > {message.content}</h1><br />
          
           
         {/* { message.status==="DELIVERED"?  <MailIcon className=" ml-4 w-4 h-4 text-blue-300" />:message.status==="READ" ? <CheckIcon className=" ml-4 w-4 h-4 text-blue-300" />:null} */}
         { message.status==="DELIVERED"?  <CheckIcon className=" ml-4 w-4 h-4 text-blue-700" />:message.status==="READ" ? <CheckIcon className=" ml-4 w-4 h-4 text-blue-300" />:null}

            </div>
            <div className="invisible group-hover:visible">
                
                <button className="block" >
           <ReplyIcon className="w-4 h-4 text-gray-400" onClick={ ()=>replyFunc(message)}/>
            
            </button>

            <button className="block">
            <PencilAltIcon className="w-4 h-4 text-blue-400"/>
            
            </button>
            <button className="block">
            <BackspaceIcon className="w-4 h-4 text-red-400"/>
            
            </button>
          
        
            </div>
            {/* {ccc &&<div className="flex flex-col">
   <h1> {ccc.content}</h1>
   <MessageInput message={ccc.content}/>
</div>} */}
</div>
            </div>
           
{/* {replyMe.length > 0 &&(
 <div  className= {`flex mb-4 ${ !user&& "justify-end mr-4"}  `}>
     {replyMe.map(reply=>(
<IndividualMessageDetails key={reply.id} message = {reply} replyMe={[]}/> 

     ))}
      </div>
)  } */}
 { ccc  && open===true && <div className={`flex flex-col p-1 ${ !user&& " items-end"}`}>

   <h1>repliy to: {ccc.user.name}</h1>
   {/* <MessageInput message={ccc.content}/> */}

   <div className=" w-3/5 bg-gray-100 flex p-5">
       <div >
           <button onClick={()=>setOpen(!open)}>
           x
           </button>
          
       </div>
        <input type="text" className="w-full" value={writeReply} onChange={(e)=>{setWriteReply(e.target.value)}}/>
        <button className={` px-2 border-2 ${!writeReply? "bg-gray-300": "bg-green-300"}`} disabled={!writeReply}  onClick={sendMessage} > send</button>
        </div>
</div>}
            {/* <div  className= {`  p-1 ${ !user&& "justify-end"}`}>
            {open &&   <MessageInput/>}
            </div> */}
          
            {/* <IndividualMessageHeader users={users} id={id}/> */}
            </div>
           
        </div>
        </ReactScrollableFeed>
    )
}

export default IndividualMessageDetails

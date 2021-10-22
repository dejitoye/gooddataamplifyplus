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
import { comment } from 'postcss';
import { updateMessage } from 'src/mygraphql/mutations';
const ScrollToTop = ()=>{

}
function IndividualMessageDetails(props) {
// console.log("messageee",message)
const {replyMe,myId,deleteMsg,activeState,setActiveState,sendMessagee,updateMessage}= props
// console.log(replyMe)
 const [users,setUsers] = useState(null)
 const [id,setId] = useState(null)
 const [user,setUser] = useState(null)
 const [message, setMessage] = useState(props.message)
 const [open, setOpen] = useState(false)


// console.log("true user ",user)
// console.log("MeSSAGE",message)
// we created a state for message so we can store the value of the updated messge 

const replyId = message.id
const fiveMin = 300000
const timePassed = new Date() - new Date(message.createdAt)>fiveMin
const canReply = Boolean(myId)

const canEdit = myId===message?.user?.id && !timePassed
const canDelete = myId===message?.user?.id && !timePassed
const createdAt = new Date(message.createdAt).toLocaleDateString()

const isReplying = activeState&& activeState.type==="replying" && activeState.id===message.id
const isEditing = activeState&& activeState.type==="editing" && activeState.id===message.id
const setOpenReply = (aaa)=>{
    setOpen(!open)
    console.log("commemntt",aaa)
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




    return (
<ReactScrollableFeed> 
        <div className="p-2">
          
<div>

           
            <div  className= {` flex  p-1 ${ !user&& "justify-end"}  group`}>

              { !isEditing&& <div  className = {`flex items-center ${user && "bg-blue-200"} ${!user && "bg-green-200"} p-2 rounded-md `} >
         {/* {users&&   <img src={users?.pix} className=" h-8 w-8 rounded-full"/>} */}
            <img src={message.user?.pix} className=" h-8 w-8 rounded-full"/>
            <h1 > {message.content}</h1>
         {/* { message.status==="DELIVERED"?  <MailIcon className=" ml-4 w-4 h-4 text-blue-300" />:message.status==="READ" ? <CheckIcon className=" ml-4 w-4 h-4 text-blue-300" />:null} */}
         { message.status==="DELIVERED"?  <CheckIcon className=" ml-4 w-4 h-4 text-blue-700" />:message.status==="READ" ? <CheckIcon className=" ml-4 w-4 h-4 text-blue-300" />:null}

            </div>
}

{isEditing&& <div className="w-full">  <MessageInput 
submitLabel="UPDATE"  
hasCancelBtn 
initialText = {message.content}
handleSubmit= {(text)=>updateMessage(text,message)}
handleCancel = {()=>setActiveState(null)}
/></div> }
            <div className="invisible group-hover:visible">
            { canReply&&  <button className="block" onClick={()=>setActiveState({id:message.id,type:"replying" })} >
        {/* <ReplyIcon className="w-4 h-4 text-gray-400" onClick={()=>setOpenReply(message)}/> */}
        <ReplyIcon className="w-4 h-4 text-gray-400"/>
            
            </button>}

         {!canEdit&&   user && <button className="block" onClick={()=>setActiveState({id:message.id,type:"editing" })}>
            <PencilAltIcon className="w-4 h-4 text-blue-400"/>
            
                </button>}

           {!canDelete && user && <button className="block" onClick={()=>deleteMsg(message)}>
            <BackspaceIcon className="w-4 h-4 text-red-400"/>
            
            </button>
          }
        
            </div>

            </div>
           
{replyMe.length > 0 &&(
 <div  className= {`flex mb-4 ${ !user&& "justify-end mr-4"}  `}>
     {replyMe.map(reply=>(
<IndividualMessageDetails key={reply.id} message = {reply} replyMe={[]}/> 

     ))}
      </div>
)  }
{isReplying&&
<div>
<h1> reply to: {message.user.name}</h1>
  <MessageInput submitLabel="Reply" 
  handleSubmit = {(text)=>sendMessagee(text,message.id)}
  handleCancel = {()=>setActiveState(null)}
  hasCancelBtn 
   />  
   </div>
}
         
          
            </div>
           
        </div>
        </ReactScrollableFeed>
    )
}

export default IndividualMessageDetails

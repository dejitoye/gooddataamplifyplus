// import { getChatRoomMe, getmessagesByChatRoom, getmessagesByChatRoomMe } from "graphlqlhooks/myqueries";
import useScreenSize from "hooks/useScreenSize";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualMessageHeader from "./IndividualMessageHeader";
import { API,graphqlOperation,Auth,Hub } from 'aws-amplify'

import { DataStore, SortDirection } from '@aws-amplify/datastore';
import { Message as GetMessages } from "src/models";
import { Message  } from "src/models";
import { ChatRoomUser } from "src/models";
import IndividualMessageDetails from "./IndividualMessageDetails";
import { User } from "src/models";
import { ChatRoom } from "src/models";
import { listMessages } from "src/graphql/queries";
import { createMessage, updateChatRoom } from "src/mygraphql/mutations";
import { onCreateMessage } from "src/mygraphql/subscriptions";
// import ReactScrollableFeed from "react-scrollable-feed"
import moment from "moment";
import MessageInput from "./MessageInput";

function Messages({setChatroom}) {
  const state = useSelector((state) => state.friend.friendlist);
  const [loading, setloading] = useState(false);
  const screenSize = useScreenSize();
  const [message, setMessage] = useState("")
  const [getMessage, setGetMessage] = useState([])
  const [dispuser, setDisplayuser] = useState([])
  const [roomDetails, setRoomDetails] = useState(null)
  const [value, setValue] = useState(null)
  const [replyToMessage, setReplyToMessage] = useState(null)
  const [userid, setUserid] = useState(null)
  const [activeState, setActiveState] = useState(null)
  const router=useRouter()
  // console.log("routerMessage",router)
  // console.log("dip",getMessage)
const id = router.query.message

const dispatch = useDispatch()

  useEffect(() => {
    console.log("message fetched")
    if(id)
    fetchMessage()
    // dispatch({type:"MYID",payload:id})

  }, [router.query.message]);


  const getReplies = (commentID)=>{
    return getMessage.filter(comment=>comment.replyToMessageID===commentID).sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())
  }

  const fetchMessage = async ()=>{
    const userid= await Auth.currentAuthenticatedUser() 
    setUserid(userid.attributes.sub)
const model = await DataStore.query(GetMessages,message=>message.chatroomID("eq",id),{
  sort:message=>message.createdAt(SortDirection.ASCENDING)
})
// const bbb = model.filter(f=>f.replyToMessageID===null)

const mass = await API.graphql(graphqlOperation(listMessages))
const aaa= mass.data.listMessages.items.filter(m=>m.chatroomID===id)
// console.log("mass",bbb)
// const model = await DataStore.query(GetMessages)
const datauser= await (await DataStore.query(ChatRoomUser)).filter(a=>a.chatroom.id===id).filter(a=>a.user.id!==userid.attributes.sub)

// console.log("datauser",datauser)
setDisplayuser(datauser)
// const model = await DataStore.query(GetMessages,Predicates.ALL,{ message=>message.chatroomID("eq",id),sortDirection})
setGetMessage(model)
// setGetMessage(aaa)
console.log("model fet",model)
  }

useEffect(() => {
//  console.log("sssddddddd",id,getMessage,value)
//  const id = value.id
 console.log("sssddddddd",value)
 if(value&& value.element.chatroomID===id){
  subMesage(value,id)
  //  console.log("NA SOOOOOOOOOOO",value)
    // setGetMessage(old=>[...old,value])
  }
}, [value])


const subMesage= async(aaa,bbb)=>{
  const id = aaa.element.id
const ddd = await DataStore.query(Message,id)
console.log("my message",ddd)
// console.log("individual",ddd,bbb)
if (aaa.element.chatroomID===bbb){
  setGetMessage(old=>[...old,ddd])
}
}

// useEffect(() => {
   
//   const subscriptionRoom = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
//       next:({_,value})=>{

//           // console.log("aaaaaavccvv",chatroom)
//           console.log("valueeeeeeeeee",value.data.onCreateMessage)
         
//           setValue(value.data.onCreateMessage)
//           // const id = value.data.onUpdateChatRoom.id
  
//       }
//   })
  
//   return()=>{
//       subscriptionRoom.unsuscribe()
//     }
//   }, [])


useEffect(() => {
  console.log("ran once ")
const subscription = DataStore.observe(Message,message.id).subscribe(msg => {
//   console.log("subscription",msg.model, msg.opType, msg.element)
if(msg.model===Message && msg.opType==="UPDATE"){
    // console.log("blabalbal",msg.element)
  // setMessage((message)=>({...message,...msg.element}))
  
  
}
})
return ()=>subscription.unsubscribe
}, []);


  useEffect(() => {
    console.log("ran once ")
const subscription = DataStore.observe(Message).subscribe(msg => {
  // console.log("subscription",msg.model, msg.opType, msg.element)
  //  console.log("subscription",msg.model, msg.opType, msg.element)
  if(msg.model===Message && msg.opType==="INSERT"){
    setValue(msg)
    // setGetMessage(old=>[...old,msg.element])
    
  }
})
return ()=>subscription.unsubscribe
  }, []);


const sendMessageee=(aaa,replyid)=>{
console.log("addd Text", aaa,replyid)
}

const sendMessagee = async(aaa,replyid)=>{
  console.log("addd Text", aaa,replyid)
  const resultt= await Auth.currentAuthenticatedUser()
  const input={
    content:aaa,
    userID:resultt.attributes.sub,
    chatroomID:id,
    replyToMessageID:!replyid?null :replyid,
    status:"SENT"
    }
    console.log("inputttt",input)
    const result = await DataStore.save(new Message (
      // content:message,
      // userID:resultt.attributes.sub,
      // chatroomID:id
      input
    ))
    // console.log("message sent",result,input)
    updateLastMessage(result)
  // const result = await API.graphql(graphqlOperation(createMessage,{input}))
  // const result = await DataStore.save(new Message ({
  //   content:message,
  //   userID:resultt.attributes.sub,
  //   chatroomID:id,
  //   replyToMessageID:replyid,

  // }))
  // console.log("message sent",result,input)
  // updateLastMessage(result)
 setActiveState(null)
}

const sendMessage = async()=>{

  const resultt= await Auth.currentAuthenticatedUser()
  const input={
    content:message,
    userID:resultt.attributes.sub,
    chatroomID:id,
   
    status:"SENT"
    }
    
  // const result = await API.graphql(graphqlOperation(createMessage,{input}))
  const result = await DataStore.save(new Message ({
    content:message,
    userID:resultt.attributes.sub,
    chatroomID:id
  }))
  // console.log("message sent",result,input)
  updateLastMessage(result)
  setMessage("")
}
const updateMainMessage= async(text,msg)=>{
  console.log("edit msd",msg)
  const resultt = await DataStore.query(Message,msg.id)
  console.log("individual",resultt)
  const result = await DataStore.save(Message.copyOf(resultt,updatemsg=>{
    updatemsg.content=text
    }))
    console.log("from back end ",result)
// const editIndex= getMessage.findIndex(f=>f.id===msg.id)
const updateMsg= getMessage.map((m)=>{
 if( m.id===msg.id){
   return {...m, content:text}
  // console.log("object",m)
 }
 return m
})
setGetMessage(updateMsg)
updateLastMessage(result)
setActiveState(null)
console.log("UPDAE MY MESSAGE",text,msg,updateMsg)
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



const deleteMsg=async(aaa)=>{
  console.log("delete")
  const modelToDelete = await DataStore.query(Message,aaa.id);
DataStore.delete(modelToDelete);
  const updatedelete = getMessage.filter(did=> did.id !== aaa.id)
  setGetMessage(updatedelete)
}

  if(!router.query.message) return <h1> start a convo </h1>
 
// function to format lastonline date
const getLastOnline = (aaa)=>{
  if(!dispuser)null
  const fff = moment().diff(moment(aaa)) 
  if(fff <5 * 60 * 1000){
    return <span> online</span>
  }else{
    return <span> last seen {moment(aaa).fromNow()} </span> 
  }
}

      return (
        <div className="w-full">
          <div >
            {/* {dispuser.map(a=> <IndividualMessageHeader key = {a.id} display={a}/> )} */}
         {dispuser.map(a=>(
           <div key={a.id} className="bg-gray-100 shadow-2xl flex  absolute w-3/5 opacity-70 top-14">
             <img src={a.user?.pix} alt=""  className="w-20 h-20 rounded-full p-1"/>
             <div>
             <h1> {a.user.name}</h1>
             {/* <p> last online:{a.user.lastOnlineAt}</p>
             <p> { moment().diff(moment(a.user.lastOnlineAt)) }</p> */}
             {getLastOnline(a.user.lastOnlineAt)}
             </div>
           </div>
         ))}
          </div>
          <div className= "mt-20 mb-28">
          {/* {disp?.map((d,i)=> <IndividualMessageHeader key = {i} display = {d}/>)} */}
          {getMessage.length <=0 ?<span> no mesage</span> : (
          
          <div> 
          
            {getMessage.map(m=>   
            // <ReactScrollableFeed> 
              
              <IndividualMessageDetails key = {m.id} message={m} replyMe = { getReplies(m.id)}  setAsMessageReply={()=> setReplyToMessage(m)} 
             parentId= {m.id}
              activeState={activeState}
              setActiveState={setActiveState}
              myId={userid} deleteMsg={deleteMsg}
             sendMessagee = {sendMessagee}
             updateMessage = {updateMainMessage}
              /> 
            // </ReactScrollableFeed>
            
            )}
       
          </div>  
         
          )}
          
          </div>
         {/* <div> {disp?.user.name}</div> */}
         {/* <img src={disp?.user.pix} alt="" /> */}
         <div className="fixed bottom-0 w-full">
         <MessageInput submitLabel= "Write" message = {message} setMessage={setMessage}  sendMessage={sendMessage}  handleSubmit = {sendMessagee} setActiveState={setActiveState}/>
         </div>
          {/* <div className="fixed bottom-0 w-3/5 bg-gray-100 flex p-5">
          <input type="text" className="w-full" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
          <button className={` px-2 border-2 ${!message? "bg-gray-300": "bg-green-300"}`} disabled={!message}  onClick={sendMessage} > send</button>
          </div> */}
        </div>
      );
  };



export default Messages;

// import { getChatRoomMe, getmessagesByChatRoom, getmessagesByChatRoomMe } from "graphlqlhooks/myqueries";
import useScreenSize from "hooks/useScreenSize";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualMessageHeader from "./IndividualMessageHeader";
import { API,graphqlOperation,Auth } from 'aws-amplify'
// import { createMessage } from "src/graphql/mutations";
// import IndividualMessageHeader from "./IndividualMessageHeader";
// import { updateChatRoom } from "graphlqlhooks/myMutations";
// import { onUpdateChatRoomMe } from "graphlqlhooks/mySubscriptions";
import { DataStore, SortDirection } from '@aws-amplify/datastore';
import { Message as GetMessages } from "src/models";
import { Message  } from "src/models";
import { ChatRoomUser } from "src/models";
import IndividualMessageDetails from "./IndividualMessageDetails";
import { User } from "src/models";
import { ChatRoom } from "src/models";
import { listMessages } from "src/graphql/queries";

function Messages({setChatroom}) {
  const state = useSelector((state) => state.friend.friendlist);
  const [loading, setloading] = useState(false);
  const screenSize = useScreenSize();
  const [message, setMessage] = useState("")
  const [getMessage, setGetMessage] = useState([])
  const [dispuser, setDisplayuser] = useState([])
  const [roomDetails, setRoomDetails] = useState(null)
  const [value, setValue] = useState(null)
  const router=useRouter()
  // console.log("routerMessage",router)
  console.log("dip",getMessage)
const id = router.query.message

const dispatch = useDispatch()

  useEffect(() => {
    console.log("message fetched")
    if(id)
    fetchMessage()
    // dispatch({type:"MYID",payload:id})

  }, [router.query.message]);


  const fetchMessage = async ()=>{
    const userid= await Auth.currentAuthenticatedUser() 
const model = await DataStore.query(GetMessages,message=>message.chatroomID("eq",id),{
  sort:message=>message.createdAt(SortDirection.ASCENDING)
})
const mass = await API.graphql(graphqlOperation(listMessages))
const aaa= mass.data.listMessages.items.filter(m=>m.chatroomID===id)
console.log("mass",aaa)
// const model = await DataStore.query(GetMessages)
const datauser= await (await DataStore.query(ChatRoomUser)).filter(a=>a.chatroom.id===id).filter(a=>a.user.id!==userid.attributes.sub)

console.log("datauser",datauser)
setDisplayuser(datauser)
// const model = await DataStore.query(GetMessages,Predicates.ALL,{ message=>message.chatroomID("eq",id),sortDirection})
setGetMessage(model)
// setGetMessage(aaa)
console.log("model fet",model)
  }

  useEffect(() => {
    console.log("ran once ")
const subscription = DataStore.observe(Message).subscribe(msg => {
  console.log("subscription",msg.model, msg.opType, msg.element)
  if(msg.model===Message && msg.opType==="INSERT"){
    setGetMessage(old=>[...old,msg.element])
    
    // setGetMessage(getMessage.push(msg.element))
    // const nefw = []
    // nefw.push(msg.element)
    // console.log("PUSH",nefw)
    // if(nefw.length>0)
    
  }
})
return ()=>subscription.unsubscribe
  }, []);





const sendMessage = async()=>{
  const resultt= await Auth.currentAuthenticatedUser()
  const input={
    content:message,
    userID:resultt.attributes.sub,
    chatRoomID:id
    }
    
  // const result = await API.graphql(graphqlOperation(createMessage,{input}))
  const result = await DataStore.save(new Message ({
    content:message,
    userID:resultt.attributes.sub,
    chatroomID:id
  }))
  console.log("message sent",result,input)
  updateLastMessage(result)
  setMessage("")
}


const updateLastMessage = async(aaa)=>{
  const resultt= await Auth.currentAuthenticatedUser()
  // const input = {
    
  //   id:id,
  //   lastMessageID:aaa.data.createMessage.id,
  //   newMessage:roomDetails.newMessage++,
  //   userID:resultt.attributes.sub,

  // }
// const result =await API.graphql(graphqlOperation(updateChatRoom,{input}))
const original = await DataStore.query(ChatRoom,id)
const result = await DataStore.save(ChatRoom.copyOf(original,updateroom=>{
updateroom.LastMessage=aaa
}))
// const result = await API.graphql({ query:updateChatRoom, variables: {input: inputt}});

console.log("result is :",result)
}

  if(!router.query.message) return <h1> start a convo </h1>
 
      return (
        <div className="">
          <div >
            {/* {dispuser.map(a=> <IndividualMessageHeader key = {a.id} display={a}/> )} */}
         {dispuser.map(a=>(
           <div>
             <img src={a.user?.pix} alt="" />
             <h1> {a.user.name}</h1>
           </div>
         ))}
          </div>
          {/* {disp?.map((d,i)=> <IndividualMessageHeader key = {i} display = {d}/>)} */}
          {getMessage.length <=0 ?<span> no mesage</span> : (<div> 
            {getMessage.map(m=><IndividualMessageDetails key = {m.id} message={m}/>)}

          </div>)}
         {/* <div> {disp?.user.name}</div> */}
         {/* <img src={disp?.user.pix} alt="" /> */}
          <div className="fixed bottom-0 w-3/5 bg-gray-100 flex p-5">
          <input type="text" className="w-full" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
          <button className={` px-2 border-2 ${!message? "bg-gray-300": "bg-green-300"}`} disabled={!message}  onClick={sendMessage} > send</button>
          </div>
        </div>
      );
  };



export default Messages;

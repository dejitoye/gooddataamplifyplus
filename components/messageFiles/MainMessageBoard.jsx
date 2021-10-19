import LeftBar from 'components/mainbar/LeftBar'
import LeftTestBar from 'components/mainbar/LeftTestBar'
import RightBar from 'components/mainbar/RightBar'
import React, { useEffect, useMemo, useState } from 'react'
import CenterMessageBar from './CenterMessageBar'
import MessageFriendsList from './MessageFriendsList'
import Messages from './Messages'
import RightMessageBar from './RightMessageBar'
import { API,graphqlOperation,Auth } from 'aws-amplify'
// import { listUsers } from 'src/graphql/queries'
// import { getUserMe } from 'graphlqlhooks/myqueries'
// import { onCreateChatRoom } from 'src/graphql/subscriptions'
// import { onCreateChatRoomMe, onUpdateChatRoomMe } from 'graphlqlhooks/mySubscriptions'
import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'

import { DataStore } from '@aws-amplify/datastore';
import { User } from 'src/models'
import { ChatRoomUser } from 'src/models'
import { getChatRoom, getUser, listUsers, syncUsers } from 'src/mygraphql/queries'
import { onUpdateChatRoom } from 'src/mygraphql/subscriptions'
import { ChatRoom } from 'src/models'
import { Message } from 'src/models'
// import { User } from '../src/models';
function MainMessageBoard() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    const [userdata, setUserdata] = useState(null)
    const [chatroom, setChatroom] = useState([])
    const [value, setValue] = useState(null)
    const [valuee, setValuee] = useState(null)
    const [valueet, setValueet] = useState(null)
const [aaid,setaaid] = useState(null)
const [roomdata, setRoomdata] = useState(null)
    const router = useRouter()
    // console.log("ddddzzz",router.query.message)
    const id = router.query.message
// console.log("chatrrroom",chatroom)

const state = useSelector(state => state.utils.myid)
// console.log("state",state)
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
    const bbbb= await DataStore.query(User)
    console.log("xzzxxxxxxxx",bbbb)
    const aaa = await API.graphql(graphqlOperation(listUsers))
    console.log("frrrrrr",aaa)
    setfriend(aaa.data.listUsers.items.filter(f=>f.id !== user.attributes.sub&& f._deleted!==true))
    const id = user.attributes.sub
        const result = await API.graphql(graphqlOperation(getUser,{id}))
        // const sync = result.data.getUser.chatrooms.items.filter(f=>f._deleted !==true)
        // console.log("rrrrrrrrr",sync)
        console.log("userdata",result.data.getUser)
        setRoomdata(result.data.getUser)
        // dispatch({type:"USERDATA",payload:result.data.getUser})
        setUserdata(result.data.getUser.chatrooms.items)
        setChatroom(result.data.getUser.chatrooms.items.filter(f=>f._deleted !==true))
        // userdata?.chatRoomUser?.items
    setloading(false)
    // console.log("aaa",aaa)
}

// useEffect(() => {
//     const susbcriptionCreate = API.graphql(graphqlOperation(onCreatePost)).subscribe({
//       next: ({ provider, value }) => {
//         console.log("vallue",value)
//         dispatch({ type: "FETCH", payload: [value.data.onCreatePost] });
//         setPosts((old)=>[value.data.onCreatePost,...old])
//       },
//     });
  
//     const subscriptionUpdate = API.graphql(
//       graphqlOperation(onUpdatePost)
//     ).subscribe({
//       next: ({ provider, value }) => {
//         console.log("updats sub", value);
//        const indexm = posts.findIndex(f=>f.id===value.data.onUpdatePost.id)
//         // dispatch({ type: "UPDATE-SUB", payload: value.data.onUpdatePost });
//         console.log("update indexxx",indexm)
//         const newEdit = [...posts]
//         newEdit[indexm]=value.data.onUpdatePost
//         setPosts(newEdit)
//       },
//     });
//     return () => {
//       subscriptionCreate.unsubscribe();
//       // subscriptionDelete.unsubscribe();
//       subscriptionUpdate.unsubscribe();
//       // subscriptionCreateComment.unsubscribe(); 
//     };
//   }, [])


// we set the subscription value to state and ran useeffect,this method works cos router is always available

useEffect(() => {
   
    console.log("dzxx",id,chatroom)
    const filterChatRoomId = chatroom.map(r=>r.chatRoomID)
    console.log("filteredroom",filterChatRoomId)
    if(valuee){
        add(valuee,chatroom,userid,valueet)
        // const id= value.id
        // const  sss =  API.graphql(graphqlOperation(getChatRoom,{id}))
    //    console.log("rrrrrrr",sss)
        // const add = async()=>{
        //     const  sss = await API.graphql(graphqlOperation(getChatRoom,{id}))
        //     console.log("asasasas",sss)
           
        // }
            // console.log("return statement",add()) 
          
        

        // const ccc = value[0]
     const check = " filterChatRoomId.includes(ccc.chatRoomID) "

       if(check){
        
//         const fff = value.map(async f=>{
//             const ddd=f.userID
//             const bbb = await DataStore.query(User,ddd)
//             console.log("userrrrr",bbb)
// const tht= []
// tht.push(bbb)

//             // return ddd
//             // console.log("array of",tht)
//             // const getIndex= chatroom.findIndex(f=> f.id===ccc.id)
//             // console.log("getindex",getIndex)
//             // const newEdit=[...chatroom]
//             // console.log("new edit",newEdit)
//             // newEdit[getIndex].chatroom.ChatRoomUsers.items=tht
//             // console.log("cbabab",newEdit)

//        })
    //    console.log("frrrrr",fff)
    //   const getIndex= chatroom.findIndex(f=> f.id===ccc.id)
    //   console.log("getindex",getIndex)
    //   const newEdit=[...chatroom]
    //   newEdit[getIndex]=ccc
    //   console.log("new edit",newEdit)
    //   setChatroom(newEdit)
       }
        // console.log("filtered",ccc,check)
       
    }else{
        console.log("we need to set the new value of chatroom")
    }
    
   }, [valuee,valueet]);

   

   const add = async(aaa,bbb,ccc,ddd)=>{
    const user = await Auth.currentAuthenticatedUser()
    const idd  = user.attributes.sub
    const id = ccc.attributes.sub
    console.log("iddddd",idd,ddd)
  
    
    const filterChatRoomId = bbb.map(r=>r.chatroomID)
    console.log("filteredrooaaaaaam",filterChatRoomId)
    // const id = aaa[0].chatroomID
    const tt = aaa.id
    // const  sss = await API.graphql(graphqlOperation(getChatRoom,{id}))
    const ssst= await API.graphql(graphqlOperation(getUser,{id}))
const sssj= ssst.data.getUser.chatrooms.items.filter(r=>r.chatroomID===aaa.id)
const sss= sssj[0]
const checkUser= sss?.chatroom?.ChatRoomUsers?.items.map(m=>m.user.id).includes(id)
console.log("chekuserrrrooo",checkUser)
    console.log("asasasasvalue",aaa,"ddddroom",bbb,"chatttddd",sss)
    console.log("useeerrr",sss)
    // const ccc = aaa[0]
    // const check =  filterChatRoomId.includes(ccc.chatroomID) 
    const check =  filterChatRoomId.includes(aaa.id) 
    console.log("cheeeellll",check)
    if(check&& ddd.opType==="UPDATE"){
        const getIndex= bbb.findIndex(f=> f.chatroomID===aaa.id)
        // const getIndex= bbb.findIndex(f=> f.id===aaa.id)
        console.log("getinyyyyydex",getIndex)
        const newEdit=[...bbb]
        
        // newEdit[getIndex].chatroom.ChatRoomUsers.items=sss.data.getChatRoom.ChatRoomUsers.items
        //   newEdit[getIndex].chatroom=sss.data.getChatRoom
        newEdit[getIndex]=sss
          setChatroom(newEdit)
          console.log("new eddddd",newEdit)
    }
    else if ( !check && ddd.opType==="UPDATE"&& checkUser ) {
        setChatroom((old)=>[...old,sss])
   
     console.log("we need to set the new value of chatroom")
     return
 }
   
    // return sss
}

useEffect(() => {
    console.log("ran once ")
const subscription = DataStore.observe(ChatRoom).subscribe(msg => {
  console.log("subscriptionvvvvvvvvvvvv",msg.model, msg.opType, msg.element)
  console.log("wonderfullll",msg)
 
  if(msg.model===ChatRoom && msg.opType==="UPDATE"){
      console.log("UPDATTTTTTTEEEEEE")
    setValueet(msg)
    setValuee(msg.element)
    // setValuee(msg.element)
    
    // setGetMessage(getMessage.push(msg.element))
    // const nefw = []
    // nefw.push(msg.element)
    // console.log("PUSH",nefw)
    // if(nefw.length>0)
    
  }
})
return ()=>subscription.unsubscribe
  }, []);

//    useEffect(() => {
   
//     const subscriptionRoom = API.graphql(graphqlOperation(onUpdateChatRoom)).subscribe({
//         next:({_,value})=>{

//             console.log("aaaaaavccvv",chatroom)
//             console.log("value",value)
//             setValue(value.data.onUpdateChatRoom.ChatRoomUsers.items)
//             const id = value.data.onUpdateChatRoom.id
// // const add = async()=>{
// //     const  sss = await API.graphql(graphqlOperation(getChatRoom,{id}))
// //     console.log("asasasas",sss)
// //     // return sss
// // }
// // add(value)
//     // console.log("return statement",add)      
//         }
//     })
    
//     return()=>{
//         subscriptionRoom.unsuscribe()
       
//     }
//  }, [])

    return (
        <div className="flex  pt-14 h-screen z-20 relative bg-white ">

           <div className="w-full md:w-auto lg:w-1/5  overflow-y-auto flex-none">
              <MessageFriendsList userdata={userdata} setChatroom={setChatroom} chatroom={chatroom} userid={userid} loading={loading}/>
          </div>
          <div className =" hidden md:inline md:flex-grow overflow-y-auto border">
              <Messages setChatroom={setChatroom}/>
          </div>
           <div className=" lg:w-1/5 hidden  lg:inline flex-none overflow-y-auto border">
           <RightMessageBar friends= {friends} loading ={loading}userdata={userdata}  roomdata={roomdata}/> 
           </div>
         
        </div>
    )
}

export default React.memo( MainMessageBoard)
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
import { getUser, listUsers, syncUsers } from 'src/mygraphql/queries'
import { onUpdateChatRoom } from 'src/graphql/subscriptions'
// import { User } from '../src/models';
function MainMessageBoard() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    const [userdata, setUserdata] = useState(null)
    const [chatroom, setChatroom] = useState([])
    const [value, setValue] = useState(null)
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
    // const bbbb= await DataStore.query(User)
    // console.log("xzzxxxxxxxx",bbbb)
    const aaa = await API.graphql(graphqlOperation(listUsers))
    console.log("frrrrrr",aaa)
    setfriend(aaa.data.listUsers.items.filter(f=>f.id !== user.attributes.sub))
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
    console.log("dzxx",id,userdata)
    const filterChatRoomId = chatroom.map(r=>r.chatRoomID)
    console.log(filterChatRoomId)
    if(value){
        const ccc = value[0]
     const check =  filterChatRoomId.includes(ccc.chatRoomID) 
       if(check){
      const getIndex= chatroom.findIndex(f=> f.id===ccc.id)
      console.log(getIndex)
      const newEdit=[...userdata]
      newEdit[getIndex]=ccc
      console.log("new edit",newEdit)
    //   setChatroom(newEdit)
       }
        console.log("filtered",ccc,check)
    }else{
        console.log("we need to set the new value of chatroom")
    }
   
   }, [value]);

//    useEffect(() => {
     
//     const subscriptionRoom = API.graphql(graphqlOperation(onUpdateChatRoom)).subscribe({
//         next:({_,value})=>{

            
//             console.log("value",value)
//             // setValue(value.data.onUpdateChatRoom.chatRoomUsers.items)
            
          
//         }
//     })
  
//     return()=>
//         subscriptionRoom.unsuscribe()
    
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
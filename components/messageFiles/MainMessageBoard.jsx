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
    // console.log("xzzxxxxxxxx",bbbb)
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
if (!result.data.getUser.chatrooms ){
    setloading(false)
}
        setUserdata(result.data.getUser.chatrooms.items)
        setChatroom(result?.data?.getUser?.chatrooms?.items?.filter(f=>f._deleted !==true))
        // userdata?.chatRoomUser?.items
    setloading(false)
    // console.log("aaa",aaa)
}


useEffect(() => {
   
    // console.log("dzxx",id,chatroom)
    const filterChatRoomId = chatroom.map(r=>r.chatRoomID)
    // console.log("filteredroom",filterChatRoomId)
    if(valuee){
        add(valuee,chatroom,userid,valueet)
      

   
        // console.log("filtered",ccc,check)
       
    }
    
   }, [valuee,valueet]);

   

   const add = async(aaa,bbb,ccc,ddd)=>{
    const user = await Auth.currentAuthenticatedUser()
    const idd  = user.attributes.sub
    const id = ccc.attributes.sub
    // console.log("iddddd",idd,ddd)
  
    
    const filterChatRoomId = bbb.map(r=>r.chatroomID)
    // console.log("filteredrooaaaaaam",filterChatRoomId)
    // const id = aaa[0].chatroomID
    const tt = aaa.id
    // const  sss = await API.graphql(graphqlOperation(getChatRoom,{id}))
    const ssst= await API.graphql(graphqlOperation(getUser,{id}))
const sssj= ssst.data.getUser.chatrooms.items.filter(r=>r.chatroomID===aaa.id)
const sss= sssj[0]
const checkUser= sss?.chatroom?.ChatRoomUsers?.items.map(m=>m.user.id).includes(id)
console.log("chekuserrrrooo",checkUser)
    // console.log("asasasasvalue",aaa,"ddddroom",bbb,"chatttddd",sss)
    // console.log("useeerrr",sss)
    // const ccc = aaa[0]
    // const check =  filterChatRoomId.includes(ccc.chatroomID) 
    const check =  filterChatRoomId.includes(aaa.id) 
    console.log("cheeeellll",check)
    if(check ){
        const getIndex= bbb.findIndex(f=> f.chatroomID===aaa.id)
      
        // console.log("getinyyyyydex",getIndex)
        const newEdit=[...bbb]
      
        newEdit[getIndex]=sss
          setChatroom(newEdit)
        //   console.log("new eddddd",newEdit)
    }
    else if ( !check && checkUser ) {
        setChatroom((old)=>[...old,sssj[0]])
   
    //  console.log("we need to set the new value of chatroom")
     return
 }
   
    
}



   useEffect(() => {
   
    const subscriptionRoom = API.graphql(graphqlOperation(onUpdateChatRoom)).subscribe({
        next:({_,value})=>{

            // console.log("aaaaaavccvv",chatroom)
            // console.log("value",value)
           
            setValuee(value.data.onUpdateChatRoom)
            const id = value.data.onUpdateChatRoom.id
    
        }
    })
    
    return()=>{
        subscriptionRoom.unsuscribe()
       
    }
 }, [])

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
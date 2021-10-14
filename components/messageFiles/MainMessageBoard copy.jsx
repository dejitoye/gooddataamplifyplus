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
import { getUser, listUsers, syncUsers } from 'src/graphql/queries'
// import { User } from '../src/models';
function MainMessageBoard() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    const [userdata, setUserdata] = useState([])
    const [chatroom, setChatroom] = useState([])
    const [value, setValue] = useState(null)
const [aaid,setaaid] = useState(null)
const [roomdata, setRoomdata] = useState(null)
    const router = useRouter()
    // console.log("ddddzzz",router.query.message)
    const id = router.query.message
// console.log("chatrrroom",chatroom)
console.log("Aaaaa",friends)
const state = useSelector(state => state.utils.myid)
// console.log("state",state)
    useEffect(() => {
        console.log("friend rendered")
      userlistPlusData()
    //   userData()
    }, [])





// this would set state for user and chatroom,chatroom maybe not needed
const userlistPlusData  = async()=>{
    const user = await Auth.currentAuthenticatedUser()
    setUserid(user)  
    setloading(true)
    const aaa = await API.graphql(graphqlOperation(syncUsers))
    console.log("aaaa",aaa)
    const bbb = await DataStore.query(User);
    console.log("bbb",bbb)
    // setfriend(aaa.data.syncUsers.items.filter(f=>f.id !== user.attributes.sub))
    setfriend(bbb.filter(f=>f.id !== user.attributes.sub))
    const id = user.attributes.sub
    const result = await API.graphql(graphqlOperation(getUser,{id}))
    console.log("resultttt",result)
    setChatroom(result.data.getUser.chatrooms.items)
    
    const chatrooms = await (await DataStore.query(ChatRoomUser)).filter(a=>a.user.id===user.attributes.sub).map(m=>m.chatroom)
    // setChatroom(chatrooms)

   
    // console.log("11111",chatrooms)

    setloading(false)
    // console.log("aaa",aaa)
}


useEffect(() => {
    console.log("ran once ")
const subscriptionss = DataStore.observe(User).subscribe(msg => {
  console.log("subscription User",msg.model, msg.opType, msg.element)
// dd(msg.element)

})
return ()=>subscriptionss.unsubscribe
  }, []);
 

    return (
        <div className="flex  pt-14 h-screen z-20 relative bg-white ">

           <div className="w-full md:w-auto lg:w-1/5  overflow-y-auto flex-none">
              {/* <MessageFriendsList userdata={userdata} setChatroom={setChatroom} chatroom={chatroom} userid={userid} loading={loading}/> */}
              <MessageFriendsList />
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

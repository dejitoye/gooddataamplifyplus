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

function MessageFriendsList() {
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    const [userdata, setUserdata] = useState([])
    const [chatroom, setChatroom] = useState([])
    // chatroom may not be needed
    // console.log("object",chatroom)
    // const [friends, setfriend] = useState([])
    // const [friendsz, setfriendz] = useState([])
    // const [friendId, setfriendId] = useState(null)
    // const [loading, setloading] = useState(false)
    // const [friendss, setfriendss] = useState([])
    const [id, setId] = useState(null)

    
    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>

        {!chatroom? <h1> loading</h1>: chatroom.length <=0 ? <h1> No chat friends</h1>: 
        
        <div>
            { userdata?.map((c,i)=> 
                // <Link href={`/messages/${c.chatRoomID}`}>
                <IndividualChatRoom key = {i} chatroom = {c} userid={userid}  />
                // </Link>
                )}
             </div>}

          
        </div>
        </div>
    )
}

export default MessageFriendsList

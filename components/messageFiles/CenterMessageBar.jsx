import React from 'react'
import MessageFriendsList from './MessageFriendsList'
import Messages from './Messages'

function CenterMessageBar() {
    return (
        <div className="flex border-l">
            <div className="  w-full md:w-1/3 bg-red-900 overflow-y-auto ">  <MessageFriendsList/>  </div>
         
           <div className="  border-2 hidden md:inline md:flex-grow ">
           <Messages/> 
           </div>
        </div>
    )
}

export default CenterMessageBar

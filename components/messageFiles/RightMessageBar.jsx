import React from 'react'
import FriendsComponentList from './FriendsComponentList'

function RightMessageBar({friends,loading,userdata,roomdata}) {
    return (
        <div>
         <FriendsComponentList friends= {friends} roomdata={roomdata} loading ={loading}userdata={userdata}/>  
        </div>
    )
}

export default RightMessageBar

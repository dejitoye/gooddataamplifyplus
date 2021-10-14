// import { API, Auth, graphqlOperation } from 'aws-amplify'
// import { createChatRoom, createChatRoomUser } from 'graphql/mutations'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function IndividualFriend({friend}) {
    const [dee, setdee] = useState("")
    const [deet, setdeet] = useState("")
    const dispatch = useDispatch()

   
    return (
        <div className="bg-gray-100 ">
        {/* <button onClick={()=>frienddata(friend)} className=""> */}
       
            
     </div>
    )
}

export default IndividualFriend

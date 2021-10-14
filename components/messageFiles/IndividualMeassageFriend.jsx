// import { API, Auth, graphqlOperation } from 'aws-amplify'
import { friends } from 'data'
// import { createChatRoom, createChatRoomUser } from 'graphql/mutations'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function IndividualMeassageFriend() {

    const [dee, setdee] = useState("")
    const [deet, setdeet] = useState("")
    const [friendList, setFriendList] = useState(null)



    return (  

        <div className="bg-gray-100 ">
           {/* <button onClick={()=>frienddata(friend)} className=""> */}
           <button  className="">
          hello
               </button> 
               
        </div>

      
    )
}
 
export default IndividualMeassageFriend

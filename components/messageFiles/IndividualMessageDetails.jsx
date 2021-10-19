import { Auth } from 'aws-amplify'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {User} from "../../src/models"
import IndividualMessageHeader from './IndividualMessageHeader';
function IndividualMessageDetails({message}) {
// console.log("messageee",message)
 const [users,setUsers] = useState(null)
 const [id,setId] = useState(null)
 const [user,setUser] = useState(false)
// console.log("true user ",user)
 useEffect(() => {
     const verify=async ()=>{
        const userid= await Auth.currentAuthenticatedUser() 
if(message.userID === userid.attributes.sub|| message.user.id===userid.attributes.sub){
    setUser(true)
}
     }
  verify()
 }, [])
//  console.log("asx",users,id)
 useEffect(() => {
    //  this code is use to set the as subscription is trigered cos subscription doesnt give us the message user
    // console.log("dzxx",id)
    const userHeader = async()=>{
        const userid= await Auth.currentAuthenticatedUser() 

        const result =await DataStore.query(User,message.userID)
        setUsers(result)
const check = userid.attributes.sub=== message.userID
setId(check)
    }
userHeader()
   }, [message]);

    return (
        <div className="p-2">
            <div  className= {` flex  p-1 ${ !user&& "justify-end"} `}>
                <div  className = {`flex items-center ${user && "bg-blue-200"} ${!user && "bg-green-200"} p-2 rounded-md `} >
         {/* {users&&   <img src={users?.pix} className=" h-8 w-8 rounded-full"/>} */}
            <img src={message.user?.pix} className=" h-8 w-8 rounded-full"/>
            <h1> {message.content}</h1>
            </div>
            </div>
            {/* <IndividualMessageHeader users={users} id={id}/> */}
           
        </div>
    )
}

export default IndividualMessageDetails

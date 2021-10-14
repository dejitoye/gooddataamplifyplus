import { Auth } from 'aws-amplify'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import {User} from "../../src/models"
import IndividualMessageHeader from './IndividualMessageHeader';
function IndividualMessageDetails({message}) {

 const [users,setUsers] = useState(null)
 const [id,setId] = useState(null)

//  console.log("asx",users,id)
 useEffect(() => {
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
            {/* <IndividualMessageHeader users={users} id={id}/> */}
            <img src={users?.pix}/>
            <h1> {message.content}</h1>
           
        </div>
    )
}

export default IndividualMessageDetails

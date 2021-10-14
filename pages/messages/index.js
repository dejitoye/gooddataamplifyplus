import MainMessageBoard from '@/components/messageFiles/MainMessageBoard'
import React, { useEffect, useMemo, useState } from 'react'
import {userss} from "../../dummydata/Users"
import { API,graphqlOperation,Auth } from 'aws-amplify'
// import { listUsers } from 'src/graphql/queries'
import { DataStore } from '@aws-amplify/datastore';
import { User } from 'src/models';

function Mesages() {
    const [friends, setfriend] = useState([])
    const [loading, setloading] = useState(false)
    const [userid, setUserid] = useState(null)
    // console.log("ueeeee",userss)

    useEffect(() => {
        console.log("rendered")
        // userlist()
      }, [])

    const userlist  = async()=>{
        const user = await Auth.currentAuthenticatedUser()
            //   setUserid(user.attributes.sub)
        setloading(true)
        const bbb = await DataStore.query(User);
        // const aaa = await API.graphql(graphqlOperation(listUsers))
        // setfriend(aaa.data.listUsers.items.filter(f=>f.id !== user.attributes.sub))
        setfriend(bbb.filter(f=>f.id !== user.attributes.sub))
        setloading(false)
    }

    // useMemo(() =>userlist , [])


    return (
        <div>
        <MainMessageBoard friends= {friends}/>
        </div>
    )
}

export default Mesages

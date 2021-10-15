import LeftBar from '@/components/LeftBar'
import FullBar from '@/components/mainbar/FullBar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {withAuthenticator} from "@aws-amplify/ui-react"
import { User } from 'src/models'
import { DataStore,Predicates } from '@aws-amplify/datastore'
import { useEffect } from 'react'
import { getUser, listUsers } from 'src/graphql/queries'
import { API,graphqlOperation,Auth } from "aws-amplify"
import { ChatRoom } from 'src/models'
 function Home() {

  useEffect(() => {
    const ddd = async()=>{
      const aaa = await Auth.currentAuthenticatedUser()
     const asa=  await DataStore.start();
     const id = aaa.attributes.sub
      const fffr = await DataStore.query(User,Predicates)
      const fff = await API.graphql(graphqlOperation(getUser,{id}))
      const sss = await DataStore.query(ChatRoom)
      console.log(fff)
      console.log(fffr)
      console.log(aaa)
      console.log("sss",sss)
      console.log(asa)
    }
    
    
 
   ddd()
  }, [])
  return (
 <FullBar/>
  )
}
export default withAuthenticator( Home)
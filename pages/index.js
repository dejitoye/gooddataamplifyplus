import LeftBar from '@/components/LeftBar'
import FullBar from '@/components/mainbar/FullBar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {withAuthenticator} from "@aws-amplify/ui-react"
import { User } from 'src/models'
import { DataStore,Predicates } from '@aws-amplify/datastore'
import { useEffect } from 'react'
import { listUsers } from 'src/graphql/queries'
import { API,graphqlOperation,Auth } from "aws-amplify"
 function Home() {

  useEffect(() => {
    const ddd = async()=>{
      const aaa = await Auth.currentAuthenticatedUser()
      const fffr = await DataStore.query(User,Predicates)
      const fff = await API.graphql(graphqlOperation(listUsers))
      console.log(fff)
      console.log(fffr)
      console.log(aaa)
    }
    
    
 
   ddd()
  }, [])
  return (
 <FullBar/>
  )
}
export default withAuthenticator( Home)
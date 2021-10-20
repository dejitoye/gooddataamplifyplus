import '../styles/globals.css'

import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {createWrapper} from "next-redux-wrapper"
import {Provider} from "react-redux"
import store from "store/store"
import {ThemeProvider} from "next-themes"
import LeftBar from '@/components/LeftBar'
import { DataStore,Predicates } from '@aws-amplify/datastore'
import { API,graphqlOperation,Auth,Hub } from "aws-amplify"
import Amplify from "aws-amplify"
import config from "../src/aws-exports"
import { useEffect, useState } from 'react'
import { Message } from 'src/models'


import { User } from 'src/models'
import moment from 'moment'
Amplify.configure({...config,ssr:true})
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
console.log("yyyyyyyy",user)


  useEffect(() => {
   const fetchUser= async()=>{
const userData = await Auth.currentAuthenticatedUser()
const user = await DataStore.query(User,userData.attributes.sub)
if(user){
  setUser(user)
}
   }
   fetchUser()
  }, [])

useEffect(() => {
  updateLastOnline()
}, [user])

// to run the set interval we hv to tk ou the user dependcy of updateLastOnline
useEffect(() => {
  if(!user)return
  // console.log("ran once ")
const subscription = DataStore.observe(User,user.id).subscribe(msg => {
console.log("subscription",msg.model, msg.opType, msg.element)
if(msg.model===User && msg.opType==="UPDATE"){
  // setUser((current)=>({...current,...msg.element}))
  // setUser(msg.element)
  
  console.log("UPDATEDDDDD",msg.element)
}
})
return ()=>subscription.unsubscribe
}, [user?.id]);


// useEffect(() => {
//   const interval = setInterval(() => {
//     updateLastOnline()
//   }, 5000);
//   return () => clearInterval(interval);
// }, [user]);

const updateLastOnline = async()=>{
if(!user) return
 const uuu= await DataStore.save(User.copyOf(user,(updated)=>{
  // updated.lastOnlineAt= Math.floor(+(new Date())/1000)
  updated.lastOnlineAt= +(new Date())
}))
console.log("object",uuu)
}

  useEffect(() => {
  
  
    const listener = Hub.listen('datastore', async hubData => {
      const  { event, data } = hubData.payload;
      console.log("datastore event ",event)
      console.log("datastore data ",data)
      if (event === 'networkStatus') {
        console.log(`User has a network connection: ${data.active}`)
        console.log('User has a network',data)
      }
      if(event=== "outboxMutationProcessed" && data.model===Message && !(["DELIVERED","READ"].includes(data.element.status)) ){
      console.log(`mutation sync with cloud: ${data}`)
      console.log("mutation sync with cloud:," ,data.model)
    
         DataStore.save(
          Message.copyOf(data.element,(updated)=>{
            updated.status ="DELIVERED"
          })
        )
      
    }
    })
    
  
    // Remove listener
  return ()=>listener();
    
  
  }, [])

  return (
    <Provider store = {store}>
     <ThemeProvider attribute="class">

    <Layout> 
      {/* <LeftBar/> */}
<Component {...pageProps} />

    </Layout>
    </ThemeProvider>
    </Provider>
  )
}
const makestore = ()=>store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)

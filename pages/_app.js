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
import { useEffect } from 'react'
import { Message } from 'src/models'
Amplify.configure({...config,ssr:true})
function MyApp({ Component, pageProps }) {

  useEffect(() => {
  
  
    const listener = Hub.listen('datastore', async hubData => {
      const  { event, data } = hubData.payload;
      console.log("datastore event ",event)
      console.log("datastore data ",data)
      if (event === 'networkStatus') {
        console.log(`User has a network connection: ${data.active}`)
        console.log('User has a network',data)
      }
      if(event=== "outboxMutationProcessed"){
      console.log(`mutation sync with cloud: ${data}`)
      console.log("mutation sync with cloud:," ,data.model)
      if(data.model===Message){
         DataStore.save(
          Message.copyOf(data.element,(updated)=>{
            updated.status ="DELIVERED"
          })
        )
      }
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

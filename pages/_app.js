import '../styles/globals.css'

import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {createWrapper} from "next-redux-wrapper"
import {Provider} from "react-redux"
import store from "store/store"
import {ThemeProvider} from "next-themes"
import LeftBar from '@/components/LeftBar'

import Amplify from "aws-amplify"
import config from "../src/aws-exports"
Amplify.configure({...config,ssr:true})
function MyApp({ Component, pageProps }) {
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

// import { useTheme } from 'next-themes'
import Navbar from './Navbar'
import NewFile from './NewFile'
import {useTheme} from "next-themes"

function Layout({children}) {
  const { theme, setTheme } = useTheme()
  const changeTheme = ()=>{
    setTheme(theme==="light"? "dark":"light")
  }
    return (
        <div>
          {/* <Navbar/>   */}
          <NewFile changeTheme={changeTheme}/>
          {children}
         
        </div>
    )
}

export default Layout

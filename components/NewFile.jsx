import React, { useState } from "react";
import Link from "next/link"
// import { Link } from "react-router-dom";
// import useDarkMode from "../hooks/useDarkMode";
// import SearchForm from "./forms/SearchForm";
// import { BellIcon, ChevronDoubleLeftIcon, InboxIcon, LightBulbIcon, MailIcon, MoonIcon, SearchCircleIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/outline";
// import useDarkMode from "hooks/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
// import Search from "./forms/Search";
import Menu from "./forms/Menu"
import { ChevronDoubleLeftIcon, InboxIcon, LightBulbIcon, MoonIcon, SearchCircleIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/outline";
import SearchForm from "./forms/SearchForm";
import useDarkMode from "hooks/useDarkMode";
import { useTheme } from 'next-themes'
// import Menu from "./forms/Menu";
// import blankpic from "../images/blankpic.png";
import { Auth } from "aws-amplify";
function NewFile(props) {
  const {changeTheme}=props
    const [display, setdisplay] = useState(false)
    const [word,setWord] =useState ("")
    const [ddd, setddd] = useState(true)
    const { theme, setTheme } = useTheme()
    // const [colorTheme, setTheme] = useDarkMode();
  
    const state = useSelector(state => state.userSession.login)
    const dispatch = useDispatch()
    console.log(state)
  // const changeTheme = ()=>{
  //   setTheme(theme==="light"? "dark":"light")
  // }

    const signOut = async()=>{
const result = await Auth.signOut()
    }
    const session = ()=>{
      dispatch({type:"SIGNIN"})
    }
    
const addinput =(e)=>{
    setWord(e.target.value)
    console.log(word)
}

const back =()=>{
    setdisplay(false)
    setddd(true)  
    setWord("")
}
    const search = ()=>{
     
            setdisplay(true)
            setddd(false)
          
           
    }
  useDarkMode();
  return (
    <div className="  bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex items-center justify-between fixed top-0 z-50 border-b dark:border-dark-third px-2 py-2" >
  {/* first side */}
  <div className="flex items-center">
        <Link href="/" className=" hidden lg:inline-block ">
          <span className="font-extrabold text-blue-700 text-lg  p-2 ">
            Discussion
          </span>
        </Link>

        <Link href="/" className="inline-block lg:hidden">
          <div className="font-extrabold text-blue-700 text-lg p-2">D</div>
        </Link>
        <div className="hidden md:inline-flex  md:items-center  bg-gray-100 outline-none rounded-full p-1">
                 <SearchCircleIcon  onClick={()=>console.log("clikedddddddd")} className="h-6 w-6"/>
                 {/* <input type="text" /> */}
                 {/* <div className="rounded-full"> */}
                 <SearchForm addinput={addinput} word = {word}/></div>
                 {/* </div> */}

                 <div className="flex">
                {  display && <ChevronDoubleLeftIcon onClick={back} className="h-6 w-6 md:hidden "/>}
               {/* { state&& <input onChange ={addinput} value={word} type="text" className="md:hidden w-72" />} */}
               { display&& <SearchForm addinput={addinput} word = {word}/>}
                 {/* <h1>hhhhhhhhhhhhh</h1> */}
               
                {ddd && <SearchCircleIcon onClick={search} className="h-6 w-6 md:hidden "/>}
                 </div>
       
      </div>

  {/* 2nd div */}
      {/* function to hide middle div on search and function to hide details if not logged */}
      {  ddd &&  state&& <div className="flex   justify-between"> 
       <div className=" flex items-center  justify-start space-x-16  hidden lg:inline-flex mr-20 ">
        {/* <div className="border-b-2 border-blue-600 hover:bg-blue-200">
          {trend2}
        </div> */}
        <div className="border-b-2 border-blue-600">
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
        <div className="border-b-2 border-blue-600">
          <UserGroupIcon className="h-6 w-6" />
        </div>
        <div className="border-b-2 border-blue-600">
          <InboxIcon className="h-6 w-6" />
        </div>
      </div>
             </div>
}
 {/* 3rd div */}
 <div className=" flex justify-end items-center lg:space-x-6 md:space-x-2">
      { state&&
        <Link
          href="/"
          class="inline-flex items-center hidden lg:inline-flex justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
        >
          <img
            src={blankpic}
            alt="Profile picture"
            className="rounded-full h-10 w-10"
          />
          <span className="mx-2 font-semibold dark:text-dark-txt">deji</span>
        </Link>}
      { state&& <div className="relative hidden md:inline-flex bg-gray-100 rounded-full p-1 hover:bg-gray-200">
          <div>
            <BellIcon className="h-6 w-6" />
          </div>
          <span className="absolute right-0.5 top-0  bg-red-500 text-white font-semibold rounded-full px-1 text-center text-xs text-right ">
            8+
          </span>
        </div> 
}
     { state ?   <Link className="link hidden md:inline-flex" href="/signin">
          <button className=" btnNav">Log In</button>
        {/* </Link> : <button className=" btnNav hidden md:inline-flex"onClick={()=>{dispatch({type:"LOGOUT"})}}>Sign Out</button> } */}
        </Link> : <button className=" btnNav hidden md:inline-flex"onClick={signOut}>Sign Out</button> }

        { !state && <Link className="link hidden md:inline-flex" href="/signup">
          <button className=" btnNav" >Sign Up</button>
        </Link>}
      {ddd&&  <div
          // onClick={() => setTheme(colorTheme)}
          onClick={changeTheme}
          className=" rounded-full p-1 hover:bg-gray-200   text-green-600"
        >
          {/* {colorTheme === "dark" ? <MoonIcon  className="h-6 w-6"/> : <LightBulbIcon className="h-6 w-6" />} */}
          {theme === "dark" ? <MoonIcon  className="h-6 w-6"/> : <LightBulbIcon className="h-6 w-6" />}
        </div>}
        <div className="sm:hidden lg:hidden md:inline-flex ">
          {/* {menu1} */}
          <Menu />
        </div>
      </div>
    </div>

  );
}

export default NewFile;

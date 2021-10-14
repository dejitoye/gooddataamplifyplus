import React, { useState } from 'react'
import GoBackProfile from 'utils/GoBackProfile'
// import postpix from "images/post-1.jpg"
import postpix from "../../public/images/post-1.jpg"
import { Tab } from '@headlessui/react'
import IndividualFullPost from 'components/postfiles/IndividualFullPost'
// import Test1 from 'testing/Test1'
import PostPages from 'components/centerBarFiles/PostPages'
import ProfileTabs from './ProfileTabs'
import Image from 'next/image'


function ProfileDetails() {
 
    const girl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
 

 
    return (
        <div className="flex  h-screen flex-col bg-white">
      <div>
       <div className=" sticky top-0 z-10">
           <GoBackProfile/>
           </div>  
           <div className="relative">
               <div className=""> <img src={postpix} alt="" className=" lg:h-96 w-full " /></div>
               <div className="absolute -bottom-12 left-24 md:left-64 lg:left-96 ">
               {/* <img src={postpix} alt="" className="h-40 w-40 object-fill absolute  md:top-80 md:left-64 lg:left-96  top-80 left-28 rounded-full" /> */}
               <img src={girl} alt="" className=" h-40 w-40 object-cover rounded-full border-2 border-red-900" />
               </div>
               
           </div>
           <div className="mt-10 flex justify-center items-center flex-col"> 
           <span className="text-gray-700 font-extrabold "> Deji Toye</span>
           <span className="text-gray-700 font-extrabold italic"> God is good</span>
           </div>
           <div >
        
    <ProfileTabs/>
           </div>
           </div> 

        </div>
    )
}

export default ProfileDetails

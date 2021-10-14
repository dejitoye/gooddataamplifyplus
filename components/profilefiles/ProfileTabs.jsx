import { Tab } from '@headlessui/react'
import PostPages from 'components/centerBarFiles/PostPages'
import React, { useState } from 'react'
import Test1 from 'testing/Test1'

function ProfileTabs() {
    const [state, setstate] = useState("")
    console.log(state)
    const letsee = (aa)=>{
        if(aa===0)setstate("replies")
        if(aa===1)setstate("messages")
        return
    }
    return (
        <div>
            <Tab.Group
        //    onClick = {()=>{console.log("clicked me ")}}
      onChange={(index) => {
        console.log('Changed selected tab to:', index)
        // setstate(index)
        letsee(index)
      }}
      
    >
      <Tab.List className=" border-purple-200 border p-3 ">
        <Tab className=" hover:border-purple-200  rounded-full mx-2 px-4 py-1">Your Post</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><PostPages/></Tab.Panel>
        <Tab.Panel><Test1 state={state}/></Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
     
      </Tab.Panels>
    </Tab.Group>  
        </div>
    )
}

export default ProfileTabs

import React from 'react'
import CenterBar from './CenterBar'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function FullBar() {
    return (
        <div className=" flex pt-14 h-screen ">
           
           <LeftBar/>
          
           <CenterBar/>
           <RightBar/>
        </div>
    )
}

export default FullBar

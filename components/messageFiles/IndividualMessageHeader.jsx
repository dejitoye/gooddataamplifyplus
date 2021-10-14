import React from 'react'
import {useSelector} from "react-redux"
function IndividualMessageHeader({display}) {

  const friend = useSelector(state => state.friend.friendlist)
  console.log("friend",display)
    return (
        <div >
<div> 
<img src={display.user?.pix} alt="" />  </div>

          {/* <div>{friend&&friend.map(m=>(
            <div key = {m.id}> 
            <div className="">
             <img src={m.user?.pix} alt="" />   
             </div>
            </div>
          ))} </div> */}
          {/* <img src={users?.pix} alt="" /> */}
        </div>
    )
}

export default IndividualMessageHeader

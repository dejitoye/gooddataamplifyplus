import LeftBar from 'components/mainbar/LeftBar'
import React from 'react'
import ProfileDetails from './ProfileDetails'
import RightSideProfile from './RightSideProfile'

function ProfileMainBoard() {
    return (
        <div className=" flex pt-14 h-screen z-20 relative scr">
        <LeftBar/>
        <div className ="flex-grow  overflow-y-auto border scrollbar-hide">
      <ProfileDetails/>
      </div>
      <div className="w-1/3 hidden lg:inline-flex flex-none">
        <RightSideProfile/>
        </div>
     </div>
    )
}

export default ProfileMainBoard

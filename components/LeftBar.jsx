import React from "react";
// import music from "../../images/music.png";
// import shop from "../../images/shop-icon.png";
// import save from "../../images/saved-icon.png";
// import notification from "../../images/notifications-icon.png";
// import bookmark from "../../images/bookmark-icon.png";
// import { Link } from "react-router-dom";

import 'tailwindcss/tailwind.css'
import Link from "next/link"
import Image from 'next/image'

// import blankpic from "../public/images/blankpic.png";
import blankpic from "../public/images/blankpic.png";
import ver from "../public/vercel.svg";
import { BellIcon, BookmarkAltIcon, BookmarkIcon, BriefcaseIcon, CalendarIcon, MailIcon, MusicNoteIcon, ShoppingBagIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/outline";
import useDarkMode from "hooks/useDarkMode";
// import { CalendarFilled } from "@ant-design/icons";
// import { notificaton } from 'IconsFile'

function LeftBar() {
  // useDarkMode()
  console.log("blank",blankpic)

  return (
    <div className="  flex flex-none  flex-col border-l md:items-center lg:items-start bg-white dark:bg-dark-coolbg  border-gray-400 space-y-4  px-2 py-8 lg:w-1/5 hidden md:inline-flex">
      <div className="leftBarDiv">
        {/* <Image
          // src={blankpic}
          src= "/images/avt-2.jpg"
          alt="Profile picture"
          className="rounded-full h-10 w-10"
        /> */}
        <img  src= "/images/avt-2.jpg" alt="" />
        <span className=" leftBarText"> <Link className="link" href = "/profile/1">Dejittt </Link></span>
      </div>
      <div className="leftBarDiv">
        <MusicNoteIcon className="leftBarIcon" />

        <span className="leftBarText"> Music</span>
      </div>

      <div className="leftBarDiv">
        <ShoppingCartIcon className="leftBarIcon" />

        <span className="leftBarText"> Market</span>
      </div>
      <div className="leftBarDiv">
        <BellIcon className="leftBarIcon" />

        <span className="leftBarText">Notification</span>
      </div>
      <div className="leftBarDiv">
        <BookmarkIcon className="leftBarIcon" />

        <span className="leftBarText"> Saved</span>
      </div>
      <Link href = "/messages" className="w-full">
      <div className="leftBarDiv">
      
        <MailIcon className="leftBarIcon" />
       
        <span className="leftBarText"> Messages</span>
       
      </div>
      </Link>
      <div className="leftBarDiv">
        <UserGroupIcon className="leftBarIcon" />

        <span className="leftBarText"> Groups</span>
      </div>
      <div className="leftBarDiv">
        <CalendarIcon className="leftBarIcon" />

        <span className="leftBarText"> Events</span>
      </div>
      <div className="leftBarDiv">
        <BriefcaseIcon className="leftBarIcon" />

        <span className="leftBarText">Jobs</span>
      </div>
      
    </div>
  );
}

export default LeftBar;

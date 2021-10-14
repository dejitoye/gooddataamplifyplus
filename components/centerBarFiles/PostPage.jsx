import React from "react";
// import blankpic from "../public/images/blankpic.png";
import blankpic from "../../public/images/blankpic.png"
import avt from  "../../public/images/avt.jpg"
import ppp from  "../../public/images/post-3.jpg"
import Image from 'next/image'
// import "./Post.css";
import {
  ThumbUpIcon,
  ChatAlt2Icon,
  ThumbDownIcon,
  ShareIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
// import { Link } from "react-router-dom";
import Link from "next/link"
import CommentInput from "components/forms/CommentInput";

function PostPage() {

  return (
    // <div className=" flex justify-center items-center w-80   bg-white border border-2 border-gray-200 rounded-b-md">
    //   hfgfgfgfg
    // </div>
    <div className=" w-full  border-2 rounded-lg border-green-50 shadow-2xl rounded-lg bg-white  dark:bg-dark-coolbg px-4 md:px-12 py-2 pb-4 dark:text-dark-txt hover:border-green-300  ">
      <div className="flex border p-2 px-6 rounded-lg">
        <div>
          <div className="flex justify-between w-full">
          <div className="flex items-start space-x-2 border-b-2 pb-2 w-full">
            <Image src={avt} alt="" className="rounded-full" />
            <div>
              <span className="font-medium"> deji</span>
              <span className="text-xs text-gray-400 mx-1">verified</span>
              <span className="text-xs text-gray-400 block "> 2hrs ago</span>
              <span className="text-xs text-gray-400 block">gold member</span>
            </div>
          </div>
          <div><DotsVerticalIcon className="h-6 w-6"/></div>
          </div>
          {/* put condition for images and videos incase there is no image/videos */}
          {/* put condition for Topic as aswell */}
          <p className="break-all font-extrabold text-gray-600 dark:text-dark-txt"> Topic Descriptionsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
          <Image
            src={ppp}
            alt=""
            className="h-40 w-full object-cover rounded-lg"
          />

          <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            incidunt magnam ullam excepturi, ea corporis vel laborum! Sequi,
            odit dolorem! Numquam molestiae nulla consectetur necessitatibus
            suscipit officia et, veniam rerum? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Magni suscipit expedita ipsam
            repellendus rerum voluptatibus illo consectetur a debitis dicta
            quaerat, nisi cupiditate autem sapiente veniam distinctio, at
            laborum mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum quasi ullam culpa error minus ea hic, pariatur dolores
            soluta corporis. Optio ad itaque architecto, ea odit magnam
            voluptates placeat? Quas.{" "}
          </p>
          <Link href="/post/:id">
            <span> read more</span>
          </Link>
          {/* Like/comment/share div */}
          <div className=" border rounded-lg">
            <div className="border-b-2 py-1 px-2 text-green-300 space-x-5 text-xs flex justify-start">
              <span>33k likes</span>

              <span>33k dislike</span>
              <span> 23k comments</span>
              <span> 33k shares</span>
            </div>
            <div className="flex justify-between py-1 px-2">
              {/* thumbs up and down */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {/* <span> like</span> */}
                  <button>
                    <ThumbUpIcon className="h-4" />
                  </button>
                </div>
                <div className="flex items-center">
                  <ThumbDownIcon className="h-4" />
                  {/* <span> dislike</span> */}
                </div>
              </div>

              {/* comment */}
              <div className="flex-shrink-0 flex items-center">
                {" "}
                <ChatAlt2Icon className="h-4" /> <span>comment</span>
              </div>
              {/* share */}
              <div className="flex-shrink-0 flex items-center">
                {" "}
                <ShareIcon className="h-4" /> <span>share</span>
              </div>
            </div>
          </div>

          <CommentInput/>
        </div>
      </div>
    </div>
  );
}

export default PostPage;

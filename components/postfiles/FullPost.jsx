import React from "react";
import blankpic from "images/blankpic.png";
import avt from "images/avt.jpg";
import ppp from "images/post-3.jpg";
// import "./Post.css";
import {
  ThumbUpIcon,
  ChatAlt2Icon,
  ThumbDownIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Goback from "./Goback";
import IndividualFullPost from "./IndividualFullPost";

function FullPost() {
  return (
      <div className="scrollbar-hide overflow-y-auto   lg:w-2/5 lg:flex lg:flex-col lg:flex-none "> 
      <IndividualFullPost/>
      </div>
  )
}

export default FullPost

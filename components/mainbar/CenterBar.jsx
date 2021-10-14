import React from "react";
import Menu from "../forms/Menu";
import MyTabs from "./MyTabs";
import { data } from "../../data";

import PostPages from "components/centerBarFiles/PostPages";
function CenterBar() {
  console.log(data);
  return (
    <div className="bg-white lg:w-2/5 dark:bg-dark-coolbg  scrollbar-hide overflow-y-auto sm:w-full py-4   mt-0 ">
     <PostPages/>
    </div>
  );
}

export default CenterBar;

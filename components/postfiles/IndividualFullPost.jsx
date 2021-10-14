import React from "react";

import blankpic from "../../public/images/blankpic.png";
import avt from "../../public/images/avt.jpg";
import ppp from "../../public/images/post-3.jpg";
// import "./Post.css";
import {
  ThumbUpIcon,
  ChatAlt2Icon,
  ThumbDownIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Link from "next/link"
import Goback from "./Goback";
import CommentInput from "components/forms/CommentInput";

function IndividualFullPost() {
  return (
    <div className=" w-full bg-white dark:bg-dark-coolbg   lg:p-10 px-4  py-4 mt-0 border-2 mx">
      <div className="w-full sticky -top-2 mb-4 ">
        <Goback />
      </div>
      <div className="flex">
        <div>
          <div className="flex items-start space-x-2 border-b-2 pb-2">
            <img src={avt} alt="" className="rounded-full " />
            <div>
              <Link className="text-gray-800" to="/profile/:id">
                <span className="font-medium"> deji</span>
                <span className="text-xs text-gray-400 mx-1">verified</span>
                <span className="text-xs text-gray-400 block "> 2hrs ago</span>
                <span className="text-xs text-gray-400 block">gold member</span>
              </Link>
            </div>
          </div>
          {/* put condition for images and videos incase there is no image/videos */}
          {/* put condtions for Topic */}
          <p className="break-all font-extrabold text-gray-600 dark:text-dark-txt">
            {" "}
            Topic
            Descriptionsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>

          <img src={ppp} alt="" className=" w-full object-cover rounded-lg" />

          <p className=" font-serif text-gray-700 dark:text-dark-txt ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur asperiores, debitis recusandae placeat atque eveniet?
            Nostrum, omnis, expedita est quas laudantium incidunt amet itaque
            facilis alias ipsam voluptas vero. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officia labore, numquam consectetur
            doloribus quibusdam odit, sunt, quos qui itaque deleniti iste nihil.
            Molestiae asperiores provident consectetur? Inventore atque velit
            numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nesciunt obcaecati ea qui dolorem ipsa, veniam totam nostrum vero,
            provident vitae voluptates, impedit aspernatur quasi quod eaque quos
            quo architecto rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat incidunt magnam ullam excepturi, ea
            corporis vel laborum! Sequi, odit dolorem! Numquam molestiae nulla
            consectetur necessitatibus suscipit officia et, veniam rerum? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Magni suscipit
            expedita ipsam repellendus rerum voluptatibus illo consectetur a
            debitis dicta quaerat, nisi cupiditate autem sapiente veniam
            distinctio, at laborum mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum quasi ullam culpa error minus
            ea hic, pariatur dolores soluta corporis. Optio ad itaque
            architecto, ea odit magnam voluptates placeat? Quas. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Beatae consequuntur
            asperiores, debitis recusandae placeat atque eveniet? Nostrum,
            omnis, expedita est quas laudantium incidunt amet itaque facilis
            alias ipsam voluptas vero. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officia labore, numquam consectetur doloribus
            quibusdam odit, sunt, quos qui itaque deleniti iste nihil. Molestiae
            asperiores provident consectetur? Inventore atque velit numquam
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            obcaecati ea qui dolorem ipsa, veniam totam nostrum vero, provident
            vitae voluptates, impedit aspernatur quasi quod eaque quos quo
            architecto rem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat incidunt magnam ullam excepturi, ea corporis vel
            laborum! Sequi, odit dolorem! Numquam molestiae nulla consectetur
            necessitatibus suscipit officia et, veniam rerum? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Magni suscipit expedita
            ipsam repellendus rerum voluptatibus illo consectetur a debitis
            dicta quaerat, nisi cupiditate autem sapiente veniam distinctio, at
            laborum mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum quasi ullam culpa error minus ea hic, pariatur dolores
            soluta corporis. Optio ad itaque architecto, ea odit magnam
            voluptates placeat? Quas. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae consequuntur asperiores, debitis recusandae
            placeat atque eveniet? Nostrum, omnis, expedita est quas laudantium
            incidunt amet itaque facilis alias ipsam voluptas vero. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Officia labore,
            numquam consectetur doloribus quibusdam odit, sunt, quos qui itaque
            deleniti iste nihil. Molestiae asperiores provident consectetur?
            Inventore atque velit numquam Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nesciunt obcaecati ea qui dolorem
            ipsa, veniam totam nostrum vero, provident vitae voluptates, impedit
            aspernatur quasi quod eaque quos quo architecto rem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat incidunt magnam
            ullam excepturi, ea corporis vel laborum! Sequi, odit dolorem!
            Numquam molestiae nulla consectetur necessitatibus suscipit officia
            et, veniam rerum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Magni suscipit expedita ipsam repellendus rerum
            voluptatibus illo consectetur a debitis dicta quaerat, nisi
            cupiditate autem sapiente veniam distinctio, at laborum mollitia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quasi ullam culpa error minus ea hic, pariatur dolores soluta
            corporis. Optio ad itaque architecto, ea odit magnam voluptates
            placeat? Quas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Beatae consequuntur asperiores, debitis recusandae placeat
            atque eveniet? Nostrum, omnis, expedita est quas laudantium incidunt
            amet itaque facilis alias ipsam voluptas vero. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Officia labore, numquam
            consectetur doloribus quibusdam odit, sunt, quos qui itaque deleniti
            iste nihil. Molestiae asperiores provident consectetur? Inventore
            atque velit numquam Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nesciunt obcaecati ea qui dolorem ipsa, veniam
            totam nostrum vero, provident vitae voluptates, impedit aspernatur
            quasi quod eaque quos quo architecto rem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat incidunt magnam ullam
            excepturi, ea corporis vel laborum! Sequi, odit dolorem! Numquam
            molestiae nulla consectetur necessitatibus suscipit officia et,
            veniam rerum? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Magni suscipit expedita ipsam repellendus rerum voluptatibus
            illo consectetur a debitis dicta quaerat, nisi cupiditate autem
            sapiente veniam distinctio, at laborum mollitia! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nostrum quasi ullam culpa
            error minus ea hic, pariatur dolores soluta corporis. Optio ad
            itaque architecto, ea odit magnam voluptates placeat? Quas. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur asperiores, debitis recusandae placeat atque eveniet?
            Nostrum, omnis, expedita est quas laudantium incidunt amet itaque
            facilis alias ipsam voluptas vero. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officia labore, numquam consectetur
            doloribus quibusdam odit, sunt, quos qui itaque deleniti iste nihil.
            Molestiae asperiores provident consectetur? Inventore atque velit
            numquam Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nesciunt obcaecati ea qui dolorem ipsa, veniam totam nostrum vero,
            provident vitae voluptates, impedit aspernatur quasi quod eaque quos
            quo architecto rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat incidunt magnam ullam excepturi, ea
            corporis vel laborum! Sequi, odit dolorem! Numquam molestiae nulla
            consectetur necessitatibus suscipit officia et, veniam rerum? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Magni suscipit
            expedita ipsam repellendus rerum voluptatibus illo consectetur a
            debitis dicta quaerat, nisi cupiditate autem sapiente veniam
            distinctio, at laborum mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum quasi ullam culpa error minus
            ea hic, pariatur dolores soluta corporis. Optio ad itaque
            architecto, ea odit magnam voluptates placeat? Quas. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Beatae consequuntur
            asperiores, debitis recusandae placeat atque eveniet? Nostrum,
            omnis, expedita est quas laudantium incidunt amet itaque facilis
            alias ipsam voluptas vero. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officia labore, numquam consectetur doloribus
            quibusdam odit, sunt, quos qui itaque deleniti iste nihil. Molestiae
            asperiores provident consectetur? Inventore atque velit numquam
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            obcaecati ea qui dolorem ipsa, veniam totam nostrum vero, provident
            vitae voluptates, impedit aspernatur quasi quod eaque quos quo
            architecto rem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat incidunt magnam ullam excepturi, ea corporis vel
            laborum! Sequi, odit dolorem! Numquam molestiae nulla consectetur
            necessitatibus suscipit officia et, veniam rerum? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Magni suscipit expedita
            ipsam repellendus rerum voluptatibus illo consectetur a debitis
            dicta quaerat, nisi cupiditate autem sapiente veniam distinctio, at
            laborum mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nostrum quasi ullam culpa error minus ea hic, pariatur dolores
            soluta corporis. Optio ad itaque architecto, ea odit magnam
            voluptates placeat? Quas.{" "}
          </p>

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
                    <ThumbUpIcon className="h-4 dark:text-dark-txt" />
                  </button>
                </div>
                <div className="flex items-center">
                  <ThumbDownIcon className="h-4 dark:text-dark-txt" />
                  {/* <span> dislike</span> */}
                </div>
              </div>

              {/* comment */}
              <div className="flex-shrink-0 flex items-center">
                {" "}
                <ChatAlt2Icon className="h-4 dark:text-dark-txt" />{" "}
                <span className="dark:text-dark-txt">comment</span>
              </div>
              {/* share */}
              <div className="flex-shrink-0 flex items-center">
                {" "}
                <ShareIcon className="h-4 dark:text-dark-txt" />{" "}
                <span className="dark:text-dark-txt">share</span>
              </div>
            </div>
           
          </div>
          <div className="sticky bottom-0"> <CommentInput/></div>
          
        </div>
      </div>
    </div>
  );
}

export default IndividualFullPost;

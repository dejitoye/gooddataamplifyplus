import React, { useState } from "react";
// import { searchLogo } from "../../IconsFile";

function Search() {
    const [openSearch, setOpenSearch] = useState(true)
   
  return (
    <div>
      <div className="flex bg-gray-200 rounded-full p-1">
          <button onClick = {()=>setOpenSearch(!openSearch)}>
        {searchLogo}
        </button>
        <input
          type="text"
          placeholder="search post"
          className={`outline-none bg-transparent rounded-full ml-2 text-lg lg:inline-flex ${openSearch&& 'hidden'}`}
        />
     {/* {openSearch &&   <input
          type="text"
          placeholder="search post"
          className="outline-none bg-transparent rounded-full ml-2 text-lg hidden md:inline-flex"
        />
     } */}
      </div>
    </div>
  );
}

export default Search;

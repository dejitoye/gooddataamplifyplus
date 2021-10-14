import React from 'react'

import Navbar from './Navbar'
import NewFile from './NewFile'

function Layout({children}) {
    return (
        <div>
          <Navbar/>  
          <NewFile/>
          {children}
         
        </div>
    )
}

export default Layout

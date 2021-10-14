import React, { useEffect, useState } from 'react'

function useScreenSize() {
    const [screenSize, setscreenSize] = useState()
const checkSize =()=>{
    if(window.innerWidth>1024) return setscreenSize("Large")
    if(window.innerWidth <1024 && window.innerWidth>600) return setscreenSize("Medium")
    if(window.innerWidth<600)return setscreenSize("Small")
}

    useEffect(() => {
      checkSize()
      window.addEventListener("resize",checkSize)
        return () => {
         window.removeEventListener("resize",checkSize)  
        }
    }, [])
    
return screenSize
}

export default useScreenSize

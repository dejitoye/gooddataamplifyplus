import { API,graphqlOperation,Auth } from 'aws-amplify'

import React, { useEffect } from 'react'

function IndividualListUsers({userslist,userdata,clickMe}) {
// console.log("issokay",userslist)
    // useEffect(() => {
    //     console.log("ran room")
    //   xxx() 
    // }, [])

    const xxx = async()=>{
        const user = await Auth.currentAuthenticatedUser()
        console.log(user.attributes.sub)
        const id = user.attributes.sub
      


    }
    return (
        <div className="bg-gray-100 ">
        {/* <button onClick={()=>console.log("azxssx",users.id)} className=""> */}
        {/* <button onClick={checkTrue} >  */}
        <button  onClick = {()=>clickMe(userslist)}> 
       
        <div className="flex items-center p-4 bg-gray-100 border-b justify-start mb-2">
               <img src={userslist?.pix} alt="" className="h-14 w-14 rounded-full object-cover" />
               <div className="flex flex-col items-start">
               <h1 className="text-md font-semibold "> @{ userslist.name}</h1>
               <p className="mb-2">status: {userslist.status}</p>
             
               </div>
               </div>
               </button>
     </div>
    )
}

export default IndividualListUsers

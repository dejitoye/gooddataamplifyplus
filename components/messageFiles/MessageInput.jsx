import React from 'react'

function MessageInput(props) {
  const  {message,sendMessage,setMessage,replyToMessage} =  props
    return (
        <div className=" w-3/5 bg-gray-100 flex p-5">
        <input type="text" className="w-full" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
        <button className={` px-2 border-2 ${!message? "bg-gray-300": "bg-green-300"}`} disabled={!message}  onClick={sendMessage} > send</button>
        </div>
    )
}

export default MessageInput

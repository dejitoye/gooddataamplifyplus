import React, { useState } from 'react'

function MessageInput(props) {
    const [text, setText] = useState("")
  const  {message,sendMessage,setMessage,sendMessagee,handleSubmit,submitLabel} =  props
  const onSubmit = (e)=>{
      e.preventDefault()
      handleSubmit(text)
      setText("")
  }
    return (
        <form onSubmit={onSubmit}>
        <div className=" w-3/5 bg-gray-100 flex p-5">
        {/* <input type="text" className="w-full" value={message} onChange={(e)=>{setMessage(e.target.value)}}/> */}
        <input type="text" className="w-full" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        {/* <button className={` px-2 border-2 ${!message? "bg-gray-300": "bg-green-300"}`} disabled={!message}  onClick={sendMessage} > send</button> */}
        <button className={` px-2 border-2 ${!text? "bg-gray-300": "bg-green-300"}`} disabled={!text} > {submitLabel}</button>
        </div>
        </form>
    )
}

export default MessageInput

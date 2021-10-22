import { button } from '@aws-amplify/ui'
import React, { useState } from 'react'

function MessageInput(props) {
  const  {message,sendMessage,setMessage,submitLabel,handleSubmit,setActiveState,initialText="",hasCancelBtn=false ,handleCancel } =  props
  const [text, setText] = useState(initialText)

  const onSubmit = (e)=>{
      e.preventDefault()
      handleSubmit(text)
      setText("")
    //   setActiveState(null )
  }
    return (
        <form onSubmit={onSubmit}>
        <div className=" w-3/5 bg-gray-100 flex p-5">
        <input type="text" className="w-full" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button className={` px-2 border-2 ${!text? "bg-gray-300": "bg-green-300"}`} disabled={!text}   >{submitLabel}</button>
{hasCancelBtn&& (<button onClick={handleCancel}>cancel</button>)}
        </div>
        </form>
    )
}

export default MessageInput

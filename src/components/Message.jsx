import React,{memo} from 'react'

const Message = ({messageNumber,onHangleMessage}) => {
    console.log("Message Rendering");
  return (
    <div>
        <p>send {messageNumber} message</p>
        <button onClick={onHangleMessage}>Increment Message</button>
        </div>
  )
}

export default memo(Message);
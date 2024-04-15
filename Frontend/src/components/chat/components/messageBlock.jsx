import { useState } from "react";

function MessageBlock({socket}){
    const [message, setMessage] = useState();
    const handelSent = (e)=> {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('user')){
            socket.emit('message', {
                user: localStorage.getItem('user'),
                text: message,
                id: `${socket.id}`,
                sockedID: socket.id
            })
        }
        setMessage('')
    }
    return(
        <div className="Message-block">
            <form className="user-message">
                <input type='text' value={message} onChange={(e)=> {setMessage(e.target.value)}}/>
                <button onClick={handelSent}>sent</button>
            </form>
        </div>
    )
};

export default MessageBlock;
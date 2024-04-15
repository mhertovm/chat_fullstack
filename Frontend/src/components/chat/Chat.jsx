import Sidebar from "./components/sidebar";
import Body from './components/body';
import MessageBlock from './components/messageBlock';
import { useEffect, useState } from "react";

function Chat ({socket}){
    const [messages, setMessages] = useState([]);
    useEffect(()=> {
        socket.on('response', (data)=> {setMessages([...messages, data])})
    }, [socket, messages])
    return(
        <div className="chat">
            <Sidebar socket={socket}/>
            <main className="main">
                <Body messages={messages}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    )
};

export default Chat;
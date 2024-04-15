import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Chat from '../components/chat/Chat';

function RoutesApp({socket}){
    return(
        <Routes>
            <Route path='/' element={<Home socket={socket}/>}/>
            <Route path='/chat' element={<Chat socket={socket}/>}/>
        </Routes>
    )
}

export default RoutesApp;
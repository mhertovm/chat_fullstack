import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Home({socket}){
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const handleSubmit = (e)=> {
        e.preventDefault();
        localStorage.setItem('user', {user, socketID: socket.id});
        socket.emit('newUser', user)
        navigate('/chat')
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>In chat</h2>
            <label htmlFor="user"></label>
            <input type="text" id='user' value={user} onChange={(e)=> {setUser(e.target.value)}}/>
            <button type="submit">in chat</button>
        </form>
    )
};

export default Home
import { useEffect, useState } from "react";

function Sidebar({socket}){
    const [users, setUsers] = useState([])
    useEffect(()=> {
        socket.on('responseNewUser', (data)=> {setUsers(data)})
    }, [socket, users])
    return(
        <div className="sidebar">
            <h4 className="header">Users</h4>
            <ul className="users">
                {
                    users.map((element)=> {
                        return(
                            <li>{element}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Sidebar;
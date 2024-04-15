import { useNavigate } from "react-router-dom";

function Body({messages}){
    const navigate = useNavigate()
    const handeleLeave = ()=> {
        localStorage.removeItem('user')
        navigate('/')
    };
    return(
        <>
            <header className="header">
                <button className="btn" onClick={handeleLeave}>out chat</button>
            </header>
            <div className="container">
                {
                    messages.map((element)=> {
                        if(element.user === localStorage.getItem('user')){
                            return(
                            <div className="chats" style={{color: "red"}}>
                                <p>I</p>
                                <div className="message-sender">
                                    <p>{element.text}</p>
                                </div>
                            </div>
                            )
                        } else {
                            return(
                                <div className="chats" style={{color: "green"}}>
                                    <p>{element.user}</p>
                                    <div className="message-sender">
                                        <p>{element.text}</p>
                                    </div>
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
        </>
    )
};

export default Body;
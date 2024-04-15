import React from 'react';
import RoutesApp from './routes/RoutesApp';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5000')

function App() {
  return (
    <div className="App">
      <RoutesApp socket={socket}/>
    </div>
  );
}

export default App;

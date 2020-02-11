import React from 'react';
import './App.css';
import ChatBox from '../ChatBox/ChatBox';

const DUMMY_MESSAGES = [
  {
    message: "hello",
    timestamp: Date.now()
  },
  {
    message: "How are you?",
    timestamp: Date.now()
  },
  {
    message: "Lets grab a drink!",
    timestamp: Date.now()
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Web chat
        </p> */}
        <ChatBox messages={DUMMY_MESSAGES}></ChatBox>
      </header>
    </div>
  );
}

export default App;

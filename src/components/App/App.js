import React from 'react';
import './App.css';
import firebase from "firebase";
import firebaseConfig from '../../firebaseConfig';
import ChatBox from '../ChatBox/ChatBox';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
// const database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData(1, "Samanta", "test@mail.com", "www.some_pic_url.com");

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

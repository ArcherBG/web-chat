import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import './index.css';
import App from './components/App/App';
import firebaseConfig from './firebaseConfig';
import { writeUserData } from '../src/db/users/users';
import { writeChatGroupData } from './db/chatGroups/chatGroups';
import { writeMessageData } from '../src/db/messages/messages';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function initDb() {
    // Populate with test users
    writeUserData(1, "Samanta", "samanta@mail.com", "www.some_pic_url.com");
    writeUserData(2, "John", "john@mail.com", "www.pic_of_john_url.com");
    writeUserData(3, "Leonardo", "leonardo@mail.com", "www.pic_of_leonardo_url.com");

    // Populate with test chat groups
    writeChatGroupData("Office Group", [1, 2, 3]);
    writeChatGroupData("Fun", [1, 3]);

    // Populate with test messages
    writeMessageData("Office Group", "John", 2, "The relay seems to be malfunctioning.");
}

initDb();

ReactDOM.render(<App />, document.getElementById('root'));

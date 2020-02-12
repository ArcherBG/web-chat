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
    const user1 = {
        userId: 1,
        name: "Samantha",
        email: "samantha@mail.com",
        imageUrl: "www.some_pic_url.com"
    };
    const user2 = {
        userId: 2,
        name: "John",
        email: "john@mail.com",
        imageUrl: "www.pic_of_john_url.com"
    };
    const user3 = {
        userId: 3,
        name: "Leonardo",
        email: "leonardo@mail.com",
        imageUrl: "www.pic_of_leonardo_url.com"
    };

    // Populate with test users
    writeUserData(user1);
    writeUserData(user2);
    writeUserData(user3);

    // Populate with test chat groups
    writeChatGroupData("Office Group", [user1, user2, user3]);
    writeChatGroupData("Fun", [user1, user3]);
    writeChatGroupData("Some very lonely group with a long name", [user2]);

    // Populate with test messages
    writeMessageData("Office Group", "John", 2, "The relay seems to be malfunctioning.");
}

initDb();

ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState, useEffect } from 'react';
import './ChatList.css';
import ChatListElement from '../ChatListElement/ChatListElement';
import { readChatGroupData } from '../../db/chatGroups/chatGroups';

function ChatList(props) {
    const { handleClick } = props;
    const [chatGroups, setChats] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const chatGroups = await readChatGroupData();
            setChats(chatGroups);
        }

        fetchData();
    }, []);

    return (
        <div className="ChatList">
            <div className="ChatList-title">
                List of chats:
            </div>
            <div>
                {Object.keys(chatGroups).map(key => {
                    const users = chatGroups[key];
                    let usernames = null;
                    if (Array.isArray(users)) {
                        const userArr = users.map(user => user.name);
                        usernames = userArr.reduce((accumulator, currentValue) => {
                            return accumulator + ', ' + currentValue;
                        });
                    } else {
                        usernames = Object.keys(users).map(k => users[k].name);
                    }
                    return (
                        <ChatListElement key={key} handleClick={handleClick} id={key} title={key} subtitle={usernames} />
                    );
                })}
            </div>
        </div>
    );
}

export default ChatList;

import React, { useEffect, useRef, useState } from 'react';
import './ChatBox.css';
import MessageList from './MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import { listenForNewMessages, detachListenerForNewMessages } from '../../db/messages/messages';

function ChatBox(props) {
    const { chatGroup } = props;
    const messageEndRef = useRef(null);

    const [messages, setMessages] = useState([]);
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behaviour: "smooth" });
    }

    useEffect(scrollToBottom);

    useEffect(() => {
        const getMessages = async () => {
            listenForNewMessages(chatGroup, (newMessages) => {
                setMessages(messages => [...messages, newMessages]);
            });
        }
        getMessages();
        return () => {
            setMessages([]);
            detachListenerForNewMessages(chatGroup);
        }
    }, [chatGroup]);

    return (
        <div className="ChatBox">
            <div className="ChatBox-header">{chatGroup}</div>
            <div className="ChatBox-message-wrapper">
                <MessageList messages={messages}></MessageList>
                <div ref={messageEndRef}></div>
            </div>
            <SendMessageForm chatGroup={chatGroup} />
        </div>
    );
}

export default ChatBox;

import React, { useEffect, useRef } from 'react';
import './ChatBox.css';
import MessageList from './MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

function ChatBox(props) {
    const { chatGroup, messages } = props;
    const messageEndRef = useRef(null);
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behaviour: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

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

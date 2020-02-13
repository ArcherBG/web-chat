import React, { useEffect, useRef } from 'react';
import MessageList from './MessageList/MessageList';
import './ChatBox.css';

function ChatBox(props) {
    const { messages } = props;
    const messageEndRef = useRef(null);
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({behaviour: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);
    return (
        <div className="ChatBox">
            <div className="ChatBox-header">Title</div>
            <div className="ChatBox-message-wrapper">
                <MessageList messages={messages}></MessageList>
                <div ref={messageEndRef}></div>
            </div>
            <form className="ChatBox-form">
                <input className="ChatBox-input"></input>
                <button name="button" type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBox;

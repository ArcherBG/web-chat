import React from 'react';
import './ChatBox.css';
import MessageList from './MessageList/MessageList';

function ChatBox(props) {
    const { messages } = props;
    return (
        <div className="ChatBox">
            <div className="ChatBox-header">Title</div>
            <div className="ChatBox-message-wrapper">
                <MessageList messages={messages}></MessageList>
            </div>
            <form className="ChatBox-form">
                <input className="ChatBox-input"></input>
                <button name="button" type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBox;

import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';

function MessageList(props) {
    const { messages } = props;
    return (
        <div>
            {messages.map(messageObj => (
                <Message
                    message={messageObj.message}
                    timestamp={messageObj.timestamp}
                />)
            )}
        </div>
    );
}

export default MessageList;

import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';

function MessageList(props) {
    const { messages } = props;
    return (
        <div>
            {messages && messages.map((obj, index) => (
                <Message
                    key={index}
                    author={obj.author}
                    message={obj.message}
                    timestamp={obj.timestamp}
                />)
            )}
        </div>
    );
}

export default MessageList;

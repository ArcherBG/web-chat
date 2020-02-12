import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';

function MessageList(props) {
    const { messages } = props;
    return (
        <div>
            {messages && Object.keys(messages).map(key => (
                <Message
                    key={key}
                    message={messages[key].message}
                    timestamp={messages[key].timestamp}
                />)
            )}
        </div>
    );
}

export default MessageList;

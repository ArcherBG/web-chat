import React from 'react';
import './ChatListElement.css';

function ChatListElement(props) {
    const { title, subtitle } = props;
    return (
        <div className="ChatListElement">
            <div className="ChatListElement-title">
                {title}
            </div>
            <div className="ChatListElement-subtitle">
                {subtitle}
            </div>
        </div>
    );
}

export default ChatListElement;

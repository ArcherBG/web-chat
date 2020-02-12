import React from 'react';
import './ChatListElement.css';

function ChatListElement(props) {
    const { handleClick, id, title, subtitle } = props;
    return (
        <div className="ChatListElement" onClick={(event) => handleClick(event, id)}>
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

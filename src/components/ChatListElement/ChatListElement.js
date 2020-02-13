import React from 'react';
import './ChatListElement.css';

function ChatListElement(props) {
    const { handleClick, id, title, subtitle } = props;
    return (
        <div className="ChatListElement" onClick={(event) => handleClick(event, id)}>
            <div className="ChatListElement-title" title={title}>
                {title}
            </div>
            <div className="ChatListElement-subtitle" title={subtitle}>
                {subtitle}
            </div>
        </div>
    );
}

export default ChatListElement;

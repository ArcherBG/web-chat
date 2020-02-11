import React from "react";
import "./Message.css";

function Message(props) {
    const { message, timestamp } = props;
    const elapsedTimeMs = Date.now() - timestamp;
    const elapsedTimeMin = elapsedTimeMs / (1000 * 60); // millis to minutes 
    const minutesAgo = Math.floor(elapsedTimeMin);
    return (
        <div className="Message">
            <div className="Message-author">John:</div>
            <div className="Message-message-timestamp-wrapper">
                <div className="Message-text">{message}</div>
                <div className="Message-timestamp">{minutesAgo} ago</div>
            </div>
        </div>
    );
}

export default Message;

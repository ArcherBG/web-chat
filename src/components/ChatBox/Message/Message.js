import React from "react";
import "./Message.css";
import cx from 'classnames';

function Message(props) {
    const { author, message, timestamp } = props;
    const elapsedTimeMs = Date.now() - timestamp;
    const elapsedTimeMin = elapsedTimeMs / (1000 * 60); // millis to minutes
    const minutesAgo = Math.floor(elapsedTimeMin);
    return (
        <div
            className={cx(
                    "Message",
                     {"Message-own": author === 'You'
                     })}>
            <div className="Message-author">{author}:</div>
            <div className="Message-message-timestamp-wrapper">
                <div className="Message-text">{message}</div>
                <div className="Message-timestamp">{minutesAgo}m ago</div>
            </div>
        </div>
    );
}

export default Message;

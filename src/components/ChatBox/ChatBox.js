import React from 'react';
import MessageList from './MessageList/MessageList';

function ChatBox(props) {
    const { messages } = props;
    return (
        <div>
            <MessageList messages={messages}></MessageList>
            <form>
                <input></input>
                <button name="button" type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBox;

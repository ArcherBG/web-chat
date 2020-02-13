import React from 'react';
import './Chat.css';
import ChatBox from '../ChatBox/ChatBox';
import ChatList from '../ChatList/ChatList';
import { readMessageData } from '../../db/messages/messages';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChat: null,
      messages: {}
    }
  }

  handleOpenChat = async (event, key) => {
    const messages = await readMessageData(key);
    this.setState({
      selectedChat: key,
      messages
    });
  }

  render() {
    const { selectedChat, messages } = this.state;
    return (
      <div className="Chat">
        <div className="Chat-Layout">
          <ChatList handleClick={this.handleOpenChat}></ChatList>
          {selectedChat && (
            <ChatBox className="Chat-ChatBox" chatGroup={selectedChat} messages={messages}></ChatBox>
          )}
        </div>
      </div>
    );
  }
}

export default Chat;

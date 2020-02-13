import React from 'react';
import './Chat.css';
import ChatBox from '../ChatBox/ChatBox';
import ChatList from '../ChatList/ChatList';
import { readMessageData, listenForNewMessages } from '../../db/messages/messages';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChat: null,
      messages: [],
    }
  }

  handleOpenChat = async (event, key) => {
    let messagesObject = await readMessageData(key);
    messagesObject = messagesObject || {};
    const messages = Object.keys(messagesObject).map(key => messagesObject[key]);
    this.setState({
      selectedChat: key,
      messages
    });

    listenForNewMessages(key, (newMessage) => {
      this.setState(prevState => ({
        messages: [...prevState.messages, newMessage],
      }));
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

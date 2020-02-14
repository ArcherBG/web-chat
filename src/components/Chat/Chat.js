import React from 'react';
import './Chat.css';
import ChatBox from '../ChatBox/ChatBox';
import ChatList from '../ChatList/ChatList';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChat: null,
      messages: [],
    }
  }

  handleOpenChat = async (event, key) => {
    this.setState({
      selectedChat: key,
    });
  }

  render() {
    const { selectedChat } = this.state;
    return (
      <div className="Chat">
        <div className="Chat-Layout">
          <ChatList handleClick={this.handleOpenChat}></ChatList>
          {selectedChat && (
            <ChatBox key={selectedChat} className="Chat-ChatBox" chatGroup={selectedChat}></ChatBox>
          )}
        </div>
      </div>
    );
  }
}

export default Chat;

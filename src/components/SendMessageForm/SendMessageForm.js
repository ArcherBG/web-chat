import React from 'react';
import './SendMessageForm.css';
import { writeMessageData } from '../../db/messages/messages';

const DUMMY_ID = 1;

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = async (event) => {
        const { chatGroup } = this.props;
        const { message } = this.state;
        writeMessageData(chatGroup, 'You', DUMMY_ID, message);

        this.setState({ message: '' });
        event.preventDefault();
    }

    render() {
        const { message } = this.state;
        return (
            <form className="SendMessageForm-form" onSubmit={this.handleSubmit}>
                <input className="SendMessageForm-input" required value={message} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SendMessageForm;

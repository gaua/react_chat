import React from 'react';
import SendBox from './send-box';
import MessagesBox from './messages-box';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleSendMessage(message) {
        var messages = this.state.messages;

        messages.push(message);

        this.setState({messages: messages});
    }

    render() {
        return (
            <div>
                <MessagesBox messages={this.state.messages} />
                <SendBox onSendMessage={this.handleSendMessage} />
            </div>
        );
    }
}

export default ChatBox


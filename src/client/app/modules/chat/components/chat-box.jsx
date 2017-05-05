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

        this.props.socket.on('messageSend', this.handleSendMessage);
    }

    handleSendMessage(message) {
        let messages = this.state.messages;

        messages.push(message);

        this.setState({messages: messages});
    }

    render() {
        return (
            <div>
                <MessagesBox messages={this.state.messages} />
                <SendBox
                    socket={this.props.socket}
                    username={this.props.username}
                    onSendMessage={this.handleSendMessage}
                />
            </div>
        );
    }
}

export default ChatBox


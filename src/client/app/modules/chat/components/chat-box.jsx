import React from 'react';
import SendBox from './send-box';
import MessagesBox from './messages-box';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.handleMessageSend = this.handleMessageSend.bind(this);
        this.handleUserJoined = this.handleUserJoined.bind(this);
        this.handleUserLeft = this.handleUserLeft.bind(this);

        this.props.socket.on('messageSend', this.handleMessageSend);
        this.props.socket.on('userJoined', this.handleUserJoined);
        this.props.socket.on('userLeft', this.handleUserLeft);
    }

    handleMessageSend(message) {
        this.addMessage(message);
    }

    handleUserJoined(username) {
        let message = {
            id: new Date().getTime(),
            author: 'ChatBot',
            created_at: new Date().toLocaleString(),
            text: username + ' joined to the chat.'
        };

        if (localStorage.getItem('username') !== username) {
            this.addMessage(message);
        }
    }

    handleUserLeft(username) {
        let message = {
            id: new Date().getTime(),
            author: 'ChatBot',
            created_at: new Date().toLocaleString(),
            text: username + ' left the chat.'
        };

        this.addMessage(message);
    }

    addMessage(message) {
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
                    onSendMessage={this.handleMessageSend}
                />
            </div>
        );
    }
}

export default ChatBox


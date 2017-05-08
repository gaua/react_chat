import React from 'react';
import SendBox from './send-box';
import MessagesBox from './messages-box';
import Events from '../enums/events';
import UserInfo from '../enums/user-info';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: JSON.parse(localStorage.getItem(UserInfo.MESSAGES)) || []
        };

        this.messageSend = this.messageSend.bind(this);
        this.userJoined = this.userJoined.bind(this);
        this.userLeft = this.userLeft.bind(this);

        this.props.socket.on(Events.MESSAGE_SEND, this.messageSend);
        this.props.socket.on(Events.USER_JOINED, this.userJoined);
        this.props.socket.on(Events.USER_LEFT, this.userLeft);
    }

    messageSend(message) {
        this.addMessage(message);
    }

    userJoined(username) {
        let message = {
            id: new Date().getTime(),
            type: 'bot',
            author: 'ChatBot',
            created_at: new Date().toLocaleString(),
            text: username + ' joined to the chat.'
        };

        this.addMessage(message);
    }

    userLeft(username) {
        let message = {
            id: new Date().getTime(),
            type: 'bot',
            author: 'ChatBot',
            created_at: new Date().toLocaleString(),
            text: username + ' left the chat.'
        };

        this.addMessage(message);
    }

    addMessage(message) {
        let messages = this.state.messages;

        messages.push(message);

        localStorage.setItem(UserInfo.MESSAGES, JSON.stringify(messages));

        this.setState({messages: messages});
    }

    render() {
        return (
            <div>
                <MessagesBox messages={this.state.messages} />
                <SendBox
                    socket={this.props.socket}
                    username={this.props.username}
                    onSendMessage={this.messageSend}
                />
            </div>
        );
    }
}

export default ChatBox


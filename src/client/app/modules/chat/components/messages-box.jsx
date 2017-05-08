import React from 'react';
import Message from './message';
import ReactDOM from 'react-dom';
import UserInfo from '../enums/user-info';

class MessagesBox extends React.Component {
    componentDidUpdate() {
        this.scrollDown();
    }

    componentDidMount() {
        this.scrollDown();
    }

    scrollDown() {
        let node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }

    getMessageType(message) {
        switch (message.author) {
            case UserInfo.CHAT_BOT:
                return 'bot';
            case localStorage.getItem(UserInfo.USERNAME):
                return 'self';
            default:
                return 'else';
        }
    }

    render() {
        let messages = [];

        this.props.messages.forEach(function(message) {
            messages.push(
                <Message
                    key={message.id}
                    type={this.getMessageType(message)}
                    author={message.author}
                    created_at={message.created_at}
                    text={message.text}
                />
            );
        }, this);

        return (
            <div className="messages-box" id="message-box">
                {messages}
            </div>
        );
    }
}

export default MessagesBox;
import React from 'react';
import Message from './message';
import ReactDOM from 'react-dom';

class MessagesBox extends React.Component {
    componentDidUpdate() {
        let node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }

    render() {
        let messages = [];

        this.props.messages.forEach(function(message) {
            messages.push(
                <Message
                    key={message.id}
                    type={message.type}
                    author={message.author}
                    created_at={message.created_at}
                    text={message.text}
                />
            );
        });

        return (
            <div className="messages-box" id="message-box">
                {messages}
            </div>
        );
    }
}

export default MessagesBox;
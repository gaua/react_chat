import React from 'react';
import KeyCodes from '../enums/key-codes'

class SendBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleSendMessageOnEnterPressed = this.handleSendMessageOnEnterPressed.bind(this);
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleSendMessage(event) {
        event.preventDefault();

        this.sendMessage();
    }

    handleSendMessageOnEnterPressed(event) {
        if (event.key === KeyCodes.ENTER) {
            this.sendMessage();
        }
    }

    sendMessage() {
        var text = this.state.text.trim();

        if (!text) {
            return;
        }

        this.props.onSendMessage(
            {id: new Date().getTime(), author: 'Gaua', created_at: new Date().toLocaleString(), text: text}
        );
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="type your message.."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyPress={this.handleSendMessageOnEnterPressed}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-default"
                        type="button"
                        onClick={this.handleSendMessage}>
                        Send
                    </button>
                </span>
            </div>
        );
    }
}

export default SendBox;
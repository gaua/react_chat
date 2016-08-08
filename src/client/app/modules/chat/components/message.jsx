import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div className="message">
                <div className="details">
                    <span className="author">{this.props.author}</span>
                    <span className="date">{this.props.created_at}</span>
                </div>
                <div className="text">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Message;
import React from 'react';

class Message extends React.Component {
    render() {
        let details = this.props.type !== 'self' ?
            <div className="details">
                <span className="author">{this.props.author}</span>
                <span className="date">{this.props.created_at}</span>
            </div> :
            null;

        return (
            <div className={'message ' + this.props.type}>
                {details}
                <div className="text">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Message;
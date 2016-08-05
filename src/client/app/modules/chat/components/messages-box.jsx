import React from 'react';
import Message from './message';

class MessagesBox extends React.Component {
    render() {
        return (
            <div className="messages-box">
                <Message/>

            </div>
        );
    }
}

export default MessagesBox;
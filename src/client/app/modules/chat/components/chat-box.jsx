import React from 'react';
import SendBox from './send-box';
import MessagesBox from './messages-box';

class ChatBox extends React.Component {
    render() {
        return (
            <div>
                <MessagesBox/>
                <SendBox/>
            </div>
        );
    }
}

export default ChatBox


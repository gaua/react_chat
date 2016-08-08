import React from 'react';
import Header from './header';
import ChatBox from './chat-box';

class Container extends React.Component {
    render() {
        return (
            <div className="container content">
                <Header />
                <ChatBox />
            </div>
        );
    }
}

export default Container;
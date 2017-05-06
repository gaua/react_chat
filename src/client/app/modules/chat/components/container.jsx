import React from 'react';
import Header from './header';
import ChatBox from './chat-box';
import RegistrationBox from './registration-box';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null
        };

        this.setUsername = this.setUsername.bind(this);
    }

    setUsername(username) {
        this.setState({username: username});
    }

    render() {
        let username = this.state.username || localStorage.getItem('username');
        let content = username ?
            <ChatBox socket={this.props.socket} username={username} /> :
            <RegistrationBox socket={this.props.socket} setUsername={this.setUsername} />;

        return (
            <div className="container content">
                <Header socket={this.props.socket}/>
                {content}
            </div>
        );
    }
}

export default Container;
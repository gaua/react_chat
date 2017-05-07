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
        let socket = this.props.socket;
        let username = this.state.username || localStorage.getItem('username');
        let box = username ?
            <ChatBox socket={socket} username={username} /> :
            <RegistrationBox socket={socket} setUsername={this.setUsername} />;

        return (
            <div className="container content">
                <Header socket={socket}/>
                {box}
            </div>
        );
    }
}

export default Container;
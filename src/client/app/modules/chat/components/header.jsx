import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.leaveChat = this.leaveChat.bind(this);
    }

    leaveChat() {
        let username = localStorage.getItem('username');

        this.props.socket.emit('userLeft', username);

        localStorage.removeItem('username');

        location.reload();
    }

    render() {
        let username = localStorage.getItem('username');
        let leave = username ?
            <li role="presentation"><a href="#" onClick={this.leaveChat}>Leave</a></li> :
            null;

        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right">
                        <li role="presentation" className="active"><a href="#">Hi {username}</a></li>
                        {leave}
                    </ul>
                </nav>
                <h3 className="text-muted">Chat</h3>
            </div>
        );
    }
}

export default Header;
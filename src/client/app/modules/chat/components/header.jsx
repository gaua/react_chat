import React from 'react';
import UserInfo from '../enums/user-info';
import Events from '../enums/events';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.leaveChat = this.leaveChat.bind(this);
    }

    leaveChat() {
        let username = localStorage.getItem(UserInfo.USERNAME);

        this.props.socket.emit(Events.USER_LEFT, username);

        localStorage.removeItem(UserInfo.USERNAME);

        location.reload();
    }

    render() {
        let username = localStorage.getItem(UserInfo.USERNAME);
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
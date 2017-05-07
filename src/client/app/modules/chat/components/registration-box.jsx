import React from 'react';
import Events from '../enums/events';
import UserInfo from '../enums/user-info';

class RegistrationBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.usernameFieldChange = this.usernameFieldChange.bind(this);
        this.saveUsername = this.saveUsername.bind(this);
    }

    usernameFieldChange(event) {
        this.setState({username: event.target.value});
    }

    saveUsername() {
        localStorage.setItem(UserInfo.USERNAME, this.state.username);

        this.props.socket.emit(Events.USER_JOINED, this.state.username);

        this.props.setUsername(this.state.username);
    }

    render() {
        return (
            <div className="registration-box" id="registration-box">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="type your username..."
                        value={this.state.username}
                        onChange={this.usernameFieldChange}
                    />
                    <span className="input-group-btn">
                    <button
                        className="btn btn-default"
                        type="button"
                        onClick={this.saveUsername}>
                        Join
                    </button>
                </span>
                </div>
            </div>
        );
    }
}

export default RegistrationBox


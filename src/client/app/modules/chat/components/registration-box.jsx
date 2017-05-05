import React from 'react';

class RegistrationBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleUsernameFieldChange = this.handleUsernameFieldChange.bind(this);
        this.saveUsername = this.saveUsername.bind(this);
    }

    handleUsernameFieldChange(event) {
        this.setState({username: event.target.value});
    }

    saveUsername() {
        localStorage.setItem('username', this.state.username);

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
                        onChange={this.handleUsernameFieldChange}
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


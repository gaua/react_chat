import React from 'react';

class SendBox extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="type your message.." />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Send</button>
                </span>
            </div>
        );
    }
}

export default SendBox;
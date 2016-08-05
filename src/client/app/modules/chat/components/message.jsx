import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <div className="message">
                <div className="details">
                    <span className="author">Gaua</span>
                    <span className="date">(04-08-2016 14:52)</span>
                </div>
                <div className="text">
                    <p>Jest tam jakaś lura na pokestopie?</p>
                </div>
            </div>
        );
    }
}

export default Message;
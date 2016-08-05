import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right">
                        <li role="presentation" className="active"><a href="#">Chat</a></li>
                        <li role="presentation"><a href="#">About</a></li>
                    </ul>
                </nav>
                <h3 className="text-muted">React Chat</h3>
            </div>
        );
    }
}

export default Header;
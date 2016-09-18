import React from 'react';
import ReactDOM from 'react-dom';
import Container from './modules/chat/components/container';

ReactDOM.render(
    <Container socket={io()} />,
    document.getElementById('app')
);
import React from 'react';

const footerStyles = {
    height: 'auto',
    background: '#f0f0f5',
    border: '1px solid white',
    borderRadius: '3px',
    overflow:'hidden',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0
};


class FooterComponent extends React.Component {

    render() {
        return (
            <div style={footerStyles}>Hello</div>
        );
    }
}

export default FooterComponent;

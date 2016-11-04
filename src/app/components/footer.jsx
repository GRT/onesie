import React from 'react';

const footerStyles = {
    height: '30px',
    background: '#f0f0f5',
    border: '1px solid white',
    borderRadius: '3px',
    overflow:'hidden',
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0
};


class FooterComponent extends React.Component {

    render() {
        return (
            <div style={footerStyles}>
              {this.props.children}
            </div>
        );
    }
}

export default FooterComponent;

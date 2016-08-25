import React from 'react';

const SettingStyles = {
    //height: 'auto',
    background: '#f0f0f5',
    //border: '1px solid white',
    //borderRadius: '3px',
    height: '50%',
    width: '50%'
};

class SettingsView extends React.Component {

    render() {
        return (
          <div style={{float:'right'}}>
            <img src="src/static/gear.png" style={SettingStyles} />
          </div>
        );
    }
}

export default SettingsView;

import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import ConfigView from '../components/configview.jsx';


const detailStyle = {
  height: '20em',
  width: '20em'
};
const thumbStyle = {
  backgroundColor: '#f0f0f5'
};
const imageStyle = {
  margin: 'auto',
  verticalAlign: 'middle',
  height: '25px',
  backgroundColor: '#f0f0f5'
}
const thumb = <img src="src/static/gear.png" style={imageStyle}/>;


class SettingsButton extends React.Component {

  render() {
      return (
        <div style={{float:'right', width:'30px'}}>
            <ClusterToggleView
              thumbViewStyle={thumbStyle}
              detailViewStyle={detailStyle}
              thumbElement={thumb}
              detailElement={<ConfigView />} />
        </div>
      );
  }
}

export default SettingsButton;

import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import ThumbView from './thumbview.jsx';
import ExpandedView from './expandedview.jsx';

const assemblyInnerStyles = {
  margin:'10px 10px 10px 10px',
  padding:'10px 10px 10px 10px',
  height: 'auto',
  background: '#f0f0f5',
  border: '2px solid black',
  borderRadius: '1px',
  boxShadow: '0 4px 4px rgba(0, 0, 0, .48)',
  overflow:'hidden'
};

const paragraphStyles = {
  fontSize: '18px',
  color: '#111',
  paddingLeft: '20px'
};

class Assembly extends React.Component{

  renderEnvironments() {
    return _.map(this.props.item.environments, (item, index) => {
      const data = {
        id: item.ciId ,
        profile: item.ciAttributes.profile , 
        name: item.ciName, 
        status: 'Success',
        version: item.impl,
        description: item.ciAttributes.description,
        clouds: item.clouds || 0,
        platforms: item.platforms? item.platforms : {}
      };

      const thumbStyle = {
        margin: '.5em',
        padding: '.5em',
        width: '10em',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '3px',
        boxShadow: '0 2px 2px rgba(0, 0, 0, .48)',
        overflow:'hidden'
      };

      return (
        <ClusterToggleView 
                  key={index} 
                  mode="thumbnail"
                  style={{ display: "inline-block" }}
                  thumbViewStyle={thumbStyle}
                  >
          <ThumbView data={data} />
          <ExpandedView data={data}/>
        </ClusterToggleView>
                  );
    });
  }

  error (e) { throw e; }

  render() {
    return (
      <div style={assemblyInnerStyles}>
        <div>
          <b style={paragraphStyles}>{this.props.item.ciName}</b>
        </div>
        {this.renderEnvironments()}
      </div>
    );
  }
}

Assembly.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default Assembly;
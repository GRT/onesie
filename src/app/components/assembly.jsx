import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import ThumbView from './thumbview.jsx';
import ExpandedView from './expandedview.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';


const assemblyInnerStyles = {
  margin:'10px 10px 10px 10px',
  padding:'10px 10px 10px 10px',
  height: 'auto',
  background: '#f0f0f5',
  border: '2px solid #666666',
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
        profile: item.profile ,
        name: item.ciName, 
        status: 'Success',
        version: item.impl,
        clouds: item.clouds || 0,
        platforms: item.platforms? item.platforms : {},
        assembly: this.props.item.ciName,
        organization: this.props.organization
      };

      const thumbStyle = {
        margin: '.5em',
        padding: '.5em',
        width: '14em',
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

function mapStateToProps(state){
  return {
    organization: state.organizations.selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(Assembly);
import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import envs from '../requests/get-environments';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';


function mapStateToProps(state){
  return { organizations: state.organizations };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const assemblyInnerStyles = {
  margin:'10px 10px 10px 10px',
  height: 'auto',
  background: '#f0f0f5',
  border: '1px solid gray',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .48)',
  overflow:'hidden'
};

const paragraphStyles = {
  fontSize: '18px',
  color: '#111',
  paddingLeft: '20px'
};

class Assembly extends React.Component{

  componentDidMount() { this.getEnvironments(this.props.item); }

  getEnvironments(assem) {
    const org = this.props.organization;
    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      this.props.setEnvironments(org, this.props.item , envsObjs);
    });
  }

  renderEnvironments() {
    return _.map(this.props.item.environments, (item, index) => {
      const data = {
        id: item.ciId ,
        name: item.ciName , 
        status: 'Success',
        version: item.impl
      };

      return (<ClusterToggleView key={index} mode="thumbnail" environment={data}/>);
    });
  }

  error (e) { throw e; }

  render() {
    return (
      <div style={assemblyInnerStyles}>
        <b style={paragraphStyles}>{this.props.item.ciName}</b>
        {this.renderEnvironments()}
      </div>
    );
  }
}

Assembly.propTypes = {
  item: React.PropTypes.object.isRequired,
  organization: React.PropTypes.string.isRequired,
  setEnvironments: React.PropTypes.func.isRequired
};

const ConnectedAssembly = connect(mapStateToProps , mapDispatchToProps)(Assembly);
export default ConnectedAssembly;
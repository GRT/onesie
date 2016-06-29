import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import envs from '../requests/get-environments';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';


function mapStateToProps(state){
  return {
    organizations: state.organizations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class Assembly extends React.Component{

  componentDidMount() {
    this.getEnvironments(this.props.item);

  }

  getEnvironments(assem) {
    var org = this.props.organization;

    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      this.props.setEnvironments(org, this.props.item , envsObjs);
    });
  }

  renderEnvironments() {
    return _.map(this.props.item.environments, (item, index) => {
      var data = {
        id: item.ciId ,
        name: item.ciName , 
        status: 'Success',
        version: item.impl
      };

      return (
        <ClusterToggleView key={index} mode="thumbnail" environment={data}></ClusterToggleView>
      );
    });
  }

  error (e) { throw e; }

  render() {
    return (
        <div>
          {
            this.renderEnvironments()
          }
        </div>
    );
  }

}

Assembly.propTypes = {
  item: React.PropTypes.object.isRequired,
  organization: React.PropTypes.string.isRequired
};

Assembly = connect(mapStateToProps , mapDispatchToProps)(Assembly);


export default Assembly;
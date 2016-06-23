import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import envs from './requests/get-environments';




class Assembly extends React.Component{
  componentWillMount() { this.setState({}); }

  componentWillReceiveProps(nextProps) {
    this.getEnvironments(nextProps.item);
  }

  componentDidMount() {
    this.getEnvironments(this.props.item);
  }

  getEnvironments(assem) {
    var org = this.props.organization;

    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      this.setState({environments: envsObjs });
    });
  }

  renderEnvironments() {
    return _.map(this.state.environments, (item) => {
      var data = {
        id: item.ciId ,
        name: item.ciName , 
        status: 'Success',
        version: item.impl
      };

      return (
        <ClusterToggleView mode="thumbnail" environment={data}></ClusterToggleView>
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
  organization: React.PropTypes.object.isRequired
};

export default Assembly;
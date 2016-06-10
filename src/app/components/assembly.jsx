import _ from 'lodash';
import React from 'react';
import ClusterToggleView from 'onesie-toggle-environment-block';
import envs from './requests/get-environments';




class Assembly extends React.Component{
  componentWillMount() { this.setState({}); }

  componentDidMount() {
    this.getEnvironments(this.props.item);
  }

  getEnvironments(assem) {
    console.log('Getting Environments');
    var org = assem.nsPath.replace('\/' , '')

    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      console.log('Environments Got');
      this.setState({environments: envsObjs });
    });
  }

  renderEnvironments() {
    return _.map(this.state.environments, (item, index) => {
      var data = {
        id: item.ciId ,
        name: item.ciName , 
        status: "Success",
        version: item.impl
      };

      return (
        <ClusterToggleView mode="thumbnail" environment={data}></ClusterToggleView>
      );
    });
  }

  error (e) { console.log('Error' + e ); }

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
  item: React.PropTypes.object.isRequired
};

export default Assembly;
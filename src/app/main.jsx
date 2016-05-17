'use strict';
import React from 'react';
import ScrollArea from './components/scroll.jsx';
import DropDownComponent from './components/dropdown.jsx';
import orgs from './components/requests/get-orgs';
import assems from './components/requests/get-assemblies';
import _ from 'lodash';


class Main extends React.Component{
  componentWillMount() { this.setState({}); }

  componentDidMount() {
    orgs(this.error, {}, (orgObjs) => {
      this.setState({orgs: _.map(orgObjs, 'name')});
      this.getAssemblies(this.state.orgs[0]);
    });
  }

  dropDownChange (org) {
    this.getAssemblies(org);
  }

  getAssemblies (org) {
    assems(this.error,{ooOrganization:org}, (assemObjs) => {
      this.setState({assemblies: _.map(assemObjs, 'ciName')});
    });
  }

  error (e) { console.log('Error' + e ); }

  render() {
    return (
      <div>
        <DropDownComponent onChange={ this.dropDownChange.bind(this) }
                           items={this.state.orgs || []} />
        <ScrollArea  items={this.state.assemblies || []} />
      </div>
    );
  }
}

export default Main;


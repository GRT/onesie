'use strict';
import React from 'react';
import ScrollArea from './components/scroll.jsx';
import SelectComponent from './components/select.jsx';

import orgs from './requests/get-orgs';
import assems from './requests/get-assemblies';
import _ from 'lodash';



class Main extends React.Component{
  componentWillMount() { this.setState({}); }

  componentDidMount() {
    //rootReducer.dispatch(this.props.getOrgs());
  }

  dropDownChange (org) {
    this.setState({selectedOrg: org});
    this.getAssemblies(org);
  }

  getAssemblies (org) {
    assems(this.error,{ooOrganization:org}, (assemObjs) => {
      this.setState({assemblies: assemObjs });
    });
  }

  error (e) { console.log('Error' + e ); }

  render() {
    return (
        <div>
          <SelectComponent options={ _.map( this.props.organizations.items , 'name') }
                           onChange={this.dropDownChange.bind(this)} />
          <ScrollArea  items={this.state.assemblies || []} 
                       organization={this.state.selectedOrg} />
        </div>
    );
  }
}


export default Main;



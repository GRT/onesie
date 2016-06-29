'use strict';
import React from 'react';
import ScrollArea from './components/scroll.jsx';
import SelectComponent from './components/select.jsx';

import orgs from './requests/get-orgs';
import assems from './requests/get-assemblies';
import _ from 'lodash';

class Main extends React.Component{

  componentDidMount() {
    orgs(this.error, {}, (orgObjs) => {
      this.props.setOrgs(orgObjs);
      this.loadAssemblies(orgObjs[0].name);
      this.props.setSelectedOrg(orgObjs[0].name);
    }); 
  }

  error (e) { console.log('Error' + e ); };

  dropDownChange (org) {
    this.props.setSelectedOrg(org);
    this.loadAssemblies(org);
  }

  loadAssemblies (org) {
    assems(this.error,{ooOrganization:org}, (assemObjs) => {
      this.props.setAssemblies(assemObjs , org);
    });
  }


  getAssemblies() {
    const items = this.props.organizations.items;
    const selectedOrg = this.props.organizations.selected;

    if(!items || !selectedOrg){
      return [];
    }
    
    return items[selectedOrg].assemblies;
  }


  error (e) { console.log('Error' + e ); }

  render() {
    
    return (
        <div>
          <SelectComponent options={ Object.keys(this.props.organizations.items) }
                           onChange={this.dropDownChange.bind(this)} />
            <ScrollArea  assemblies={this.getAssemblies()} organization={this.props.organizations.selected || ''} />
        </div>
    );
  }
}

export default Main;



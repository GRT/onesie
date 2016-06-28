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
    orgs(this.error, {}, (orgObjs) => {
      this.props.setOrgs(orgObjs);
      this.getAssemblies(orgObjs[0]);
    }); 
  }

  error (e) { console.log('Error' + e ); };

  dropDownChange (org) {
    this.getAssemblies(org);
  }

  getAssemblies (org) {
    assems(this.error,{ooOrganization:org.name}, (assemObjs) => {
      this.props.setAssemblies(assemObjs , org);
    });
  }

  error (e) { console.log('Error' + e ); }

  render() {
    return (
        <div>
          <SelectComponent options={ this.props.organizations.items }
                           optionLabel='name'
                           onChange={this.dropDownChange.bind(this)} />
          <ScrollArea  assemblies={this.props.assemblies} />

        </div>
    );
  }
}


export default Main;



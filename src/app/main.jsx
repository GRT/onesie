'use strict';
import React from 'react';
import Scroll from './components/scroll.jsx';
import SelectComponent from './components/select.jsx';

import orgs from './requests/get-orgs';
import assems from './requests/get-assemblies';
import envs from './requests/get-environments';

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.getEnvironments = this.getEnvironments.bind(this);
    this.dropDownChange = this.dropDownChange.bind(this);
  }

  componentDidMount() {
    orgs(this.error, orgObjs => { this.props.setOrgs(orgObjs); });
  }

  error (e) { throw e; }

  dropDownChange (org) {
    this.props.setSelectedOrg(org);
    this.loadAssemblies(org);
  }

  loadAssemblies (org) {
    const classThis = this;
    assems(this.error,{ooOrganization:org}, (assemObjs) => {
      this.props.setAssemblies(assemObjs , org);
      assemObjs.forEach(function(assem) {
        classThis.getEnvironments(assem);
      });
    });
  }

  getEnvironments(assem) {
    const org = this.props.organizations.selected;
    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      this.props.setEnvironments(org, assem , envsObjs);
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

  render() {
    return (
        <div>
          <SelectComponent options={ Object.keys(this.props.organizations.items) }
                           onChange={this.dropDownChange} />
            <Scroll assemblies={this.getAssemblies()}
                    organization={this.props.organizations.selected || ''}
            />
        </div>
    );
  }
}

Main.propTypes = {
  setAssemblies: React.PropTypes.func,
  setOrgs: React.PropTypes.func,
  setEnvironments: React.PropTypes.func,
  setSelectedOrg: React.PropTypes.object,
  organizations: React.PropTypes.object
};

export default Main;



'use strict';
import React from 'react';
import Scroll from './components/scroll.jsx';
import SelectComponent from './components/select.jsx';

import orgs from './requests/get-orgs';
import assems from './requests/get-assemblies';
import envs from './requests/get-environments';
import plats from './requests/get-platforms';
import ips from './requests/get-ips';

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
    assems(this.error,{ooOrganization:org}, (assemObjs) => {
      this.props.setAssemblies(assemObjs , org);
      assemObjs.forEach(assem => { this.getEnvironments(assem); });
    });
  }

  getEnvironments(assem) {
    const org = this.props.organizations.selected;
    envs(this.error,{ooOrganization:org , ooAssembly:assem.ciName}, (envsObjs) => {
      this.props.setEnvironments(org, assem , envsObjs);
      envsObjs.forEach(env => { this.getPlatforms(env, assem); });
    });
  }

  getPlatforms(env, assem) {
    const org = this.props.organizations.selected;
    plats(this.error,{ooOrganization:org, ooAssembly:assem.ciName, ooEnvironment:env.ciName}, (platsObjs) => {
      this.props.setPlatforms(org, assem, env, platsObjs);
      platsObjs.forEach(platform => { this.getPlatformIps(env, assem, platform); });
    });
  }

  getPlatformIps(env, assem, plat){
    const org = this.props.organizations.selected;
    ips(this.error,{ooOrganization:org, ooAssembly:assem.ciName, ooEnvironment:env.ciName , ooPlatform: plat.ciName }, (ips) => {
      if(ips){
        this.props.setPlatformIps(org, assem, env, plat, ips);
      }
    });
  }

  getAssemblies() {
    const items = this.props.organizations.items;
    const selectedOrg = this.props.organizations.selected;

    if(!items || !selectedOrg){
      return {};
    }
    return items[selectedOrg].assemblies;
  }

  render() {
    return (
        <div>
          <SelectComponent options={ Object.keys(this.props.organizations.items) }
                           onChange={this.dropDownChange} />
            <Scroll />
        </div>
    );
  }
}

Main.propTypes = {
  setAssemblies: React.PropTypes.func,
  setOrgs: React.PropTypes.func,
  setEnvironments: React.PropTypes.func,
  setPlatforms: React.PropTypes.func,
  setSelectedOrg: React.PropTypes.func,
  setPlatformIps: React.PropTypes.func,
  organizations: React.PropTypes.object
};

export default Main;



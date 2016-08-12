class OrganizationStateBuilder {
  constructor() {
    this.state = {items: {}};
  }

  buildAssemblies(orgName) {
    this.setOrganization(orgName, {assemblies: {} });
  }

  buildEnvironments(orgName, assemName) {
    this.buildAssemblies(orgName);
    this.setAssembly(orgName, assemName, { environments: {} });
  }

  buildPlatforms(orgName, assemName, envnName) {
    this.buildEnvironments(orgName, assemName);
    this.setEnvironment(orgName, assemName, envnName, { platforms: {} });
  }

  setItems(obj){
    this.state.items = obj;
  }

  setOrganization(orgName , obj) {
    this.state.items[orgName] = obj; 
  }

  setAssembly(orgName, assemName, obj) {
    this.buildAssemblies(orgName);
    this.state.items[orgName].assemblies[assemName] = obj;
  }

  setEnvironment(orgName, assemName, envnName, obj) {
    this.buildEnvironments(orgName, assemName);
    this.state.items[orgName].assemblies[assemName].environments[envnName] = obj
  }

  setPlatform(orgName, assemName, envnName, platName, obj){
    this.buildPlatforms(orgName, assemName, envnName);
    this.state.items[orgName].assemblies[assemName].environments[envnName].platforms[platName] = obj;
  }

}


export default OrganizationStateBuilder;
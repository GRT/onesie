import _ from 'lodash';
import update from 'react-addons-update';

const namespace = 'organizations';

function organizations(state = {} , action) {

  switch(action.type){
  case namespace +'.SET.ORGS':
    const orgObj = {};

    action.organizations.forEach( org => {
      orgObj[org.name] = { assemblies: {} };
    });

    state = update(state, {items: {$set: orgObj }} );
    break;

  case namespace +'.SET.SELECTED':
    state = update(state, {selected: {$set: action.selectedOrganization }} );
    break;

  case namespace +'.SET.ASSEMBLIES':
    const setOrgAssemsObj = {items: {}};

    var assemblyHash = {};
    action.assemblies.forEach(function(assembly){
      assemblyHash[assembly.ciName] = assembly;
    });

    setOrgAssemsObj.items[action.organization] = {$set: {assemblies: assemblyHash}};
    state = update(state, setOrgAssemsObj);
    break;

  case namespace + '.SET.ENVS':
    const setAssemsEnvsObj = {items: {}};
    setAssemsEnvsObj.items[action.organization] = {assemblies: {}};

    var environmentHash = {};
    action.environments.forEach(function(environment){
      environmentHash[environment.ciName] = environment;
    });

    setAssemsEnvsObj.items[action.organization].assemblies[action.assembly.ciName] = { environments: {$set: environmentHash}};
    state = update(state, setAssemsEnvsObj);
    break;

  case namespace + '.SET.PLATFORMS':
    break;
  }

  return state;
}

export default organizations;
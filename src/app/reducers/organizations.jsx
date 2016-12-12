import update from 'react-addons-update';
import OrganizationStateBuilder from '../utils/orgStateBuilderUtil';

const namespace = 'organizations';

function organizations(state = {} , action) {
  const builder = new OrganizationStateBuilder();
  let orgObj = {};
  let assemblyHash = {};
  let environmentHash = {};
  let platforms = {};

  switch(action.type){
  case namespace +'.SET.ORGS':
    action.organizations.forEach( org => {
      orgObj[org.name] = { assemblies: {} };
    });

    builder.setItems({$set: orgObj });
    state = update(state, builder.state );
    break;

  case namespace + '.SET.CONFIG':
    state = update(state, {$merge: {config: {host: action.oneOpsHost, token: action.apiToken}}});
    break;

  case namespace + '.SET.SELECTED':
    state = update(state, {selected: {$set: action.selectedOrganization }} );
    break;

  case namespace + '.SET.ASSEMBLIES':
    action.assemblies.forEach( assembly => { assemblyHash[assembly.ciName] = assembly; });
    builder.setOrganization(action.organization , {$set: {assemblies: assemblyHash}});
    state = update(state, builder.state);
    break;

  case namespace + '.SET.ENVS':
    action.environments.forEach(environment => { environmentHash[environment.ciName] = environment; });
    builder.setAssembly(action.organization, action.assembly.ciName, { environments: {$set: environmentHash}});
    state = update(state, builder.state);
    break;

  case namespace + '.SET.PLATFORMS':
    action.platforms.forEach(platform => { platforms[platform.ciName] = platform; });
    builder.setEnvironment(action.organization , action.assembly.ciName, action.environment.ciName, {platforms: {$set: platforms}});
    state = update(state, builder.state);
    break;

  case namespace + '.SET.PLATFORMS.IPS':
    builder.setPlatform(action.organization ,
    action.assembly.ciName, action.environment.ciName, action.platform.ciName, {ips: {$set: action.ips}} );
    state = update(state, builder.state);
    break;

  case namespace + '.SET.PLATFORMS.FDQNS':
    builder.setPlatform(action.organization,
                        action.assemblyName,
                        action.environmentName,
                        action.platformName,
                        {fdqns: {$set: action.fdqns}} );
    state = update(state, builder.state);
    break;
  }

  return state;
}

export default organizations;

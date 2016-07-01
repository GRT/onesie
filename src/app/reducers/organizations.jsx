import _ from 'lodash';
import update from 'react-addons-update';

const namespace = 'organizations';

function organizations(state = {} , action) {

  switch(action.type){
  case namespace +'.SET.ORGS':
    var orgObj = {};

    action.organizations.forEach(function(org) {
      orgObj[org.name] = { assemblies: [] };
    });

    state = update(state, {items: {$set: orgObj }} );
    break;

  case namespace +'.SET.SELECTED':
    state = update(state, {selected: {$set: action.selectedOrganization }} );
    break;

  case namespace +'.SET.ASSEMBLIES':
    var setOrgAssemsObj = {items: {}};
    setOrgAssemsObj.items[action.organization] = {$set: {assemblies: action.assemblies}};
    state = update(state, setOrgAssemsObj);
    break;

  case namespace + '.SET.ENVS':
    var setAssemsEnvsObj = {items: {}};
    var assems = state.items[action.organization].assemblies;

    var updatedAssems = _.map( assems, function(item){
      //TO Do: This should be changed to ciId, need to updated static data
      if(item.ciName === action.assembly.ciName){
        item.environments = action.environments;
      }
      return item;
    });

    setAssemsEnvsObj.items[action.organization] = {assemblies: {$set: updatedAssems}};

    state = update(state, setAssemsEnvsObj);
    break;
  }

  return state;
}



export default organizations;
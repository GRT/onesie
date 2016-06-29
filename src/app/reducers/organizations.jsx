import React from 'react';
import update from 'react-addons-update';

const namespace = 'organizations';

function organizations(state = {} , action) {

	switch(action.type){
    
		case namespace +'.SET.ORGS':
      var orgObj = {};

      action.organizations.forEach(function(org, index) {
        orgObj[org.name] = { assemblies: [] }
      });

			state = update(state, {items: {$set: orgObj }} );
		break;

		case namespace +'.SET.SELECTED':
			state = update(state, {selected: {$set: action.selectedOrganization }} );
		break;

    case namespace +'.SET.ASSEMBLIES':
      var updateObj = {items: {}};
      updateObj.items[action.organization] = {$set: {assemblies: action.assemblies}};

      state = update(state, updateObj);
    break;

    case namespace + ".SET.ENVS":
      var updateObj = {items: {}};
      var assems = state.items[action.organization].assemblies;

      var updatedAssems = _.map( assems, function(item, index){
        //TO Do: This should be changed to ciId, need to updated static data
        if(item.ciName === action.assembly.ciName){
          item.environments = action.environments;
        }
        return item;
      });

      updateObj.items[action.organization] = {assemblies: {$set: updatedAssems}};

      state = update(state, updateObj);
    break;
	}

	return state
}



export default organizations;
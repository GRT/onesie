import React from 'react';
import update from 'react-addons-update';

const namespace = 'organizations';

function organizations(state = {} , action) {

	switch(action.type){
		case namespace +'.SET.ORGS':
			state = update(state, {items: {$set: action.organizations }} );
		break;
		case namespace +'.SET.SELECTED':
			state = update(state, {selected: {$set: action.selectedOrganization }} );
		break;
	}

	return state
}



export default organizations;
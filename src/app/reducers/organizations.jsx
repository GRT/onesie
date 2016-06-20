import React from 'react';
import orgs from '../requests/get-orgs';


const namespace = 'organizations';

const error = function(e) { console.log('Error' + e ); };

function organizations(state = {} , action) {
	switch(action.type){
		case namespace +'.GET':
			console.log(action.type);
			orgs(error, {}, (orgObjs) => {
				state.organizations = { items: orgObjs };
			});
		break;

	}


	return state;
}



export default organizations;
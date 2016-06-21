import React from 'react';
import update from 'react-addons-update';


const namespace = 'assemblies';


function assemblies(state = [] , action) {

	switch(action.type){
		case namespace +'.SET':
			console.log(action);
			state = update(state, {items: {$set: action.assemblies } , 
						organization: {$set: action.org}} );
		break;

	}


	return state;
}



export default assemblies;
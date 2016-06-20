// Get Organizations
export function getOrgs() {
	return {
		type: 'organization.GET'
	}
}


// Get Assemblies
export function getAssems(org) {
	return {
		type: 'assemblies.GET' ,
		org: org
	}
}

//Get Environment
export function getEnvs(assems , org) {
	return {
		type: 'assemblies.GET',
		org: org,
		assems: assems
	}
}

// Get Organizations
export function setOrgs(orgs) {
	return {
		type: 'organizations.SET.ORGS',
		organizations: orgs
	}
}


export function setSelectedOrg(org) {
	return {
		type: 'organizations.SET.SELECTED',
		selectedOrganization: org
	}
}

// Get Assemblies
export function setAssemblies(assems, org) {
	return {
		type: 'assemblies.SET' ,
		assemblies: assems,
		org: org,
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

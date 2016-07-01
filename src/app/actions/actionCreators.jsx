export function setOrgs(orgs) {
  return {
    type: 'organizations.SET.ORGS',
    organizations: orgs
  };
}

export function setSelectedOrg(org) {
  return {
    type: 'organizations.SET.SELECTED',
    selectedOrganization: org
  };
}

export function setAssemblies(assems, org) {
  return {
    type: 'organizations.SET.ASSEMBLIES' ,
    assemblies: assems,
    organization: org
  };
}

export function setEnvironments(org, assem , envs) {
  return {
    type: 'organizations.SET.ENVS',
    organization: org,
    assembly: assem,
    environments: envs
  };
}

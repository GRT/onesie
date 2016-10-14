export function setConfig(host, token) {
  return {
    type: "organizations.SET.CONFIG",
    oneOpsHost: host,
    apiToken: token
  }
}

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

export function setEnvironments(org, assem, envs) {
  return {
    type: 'organizations.SET.ENVS',
    organization: org,
    assembly: assem,
    environments: envs
  };
}

export function setPlatforms(org, assem, env, plats) {
  return {
    type: 'organizations.SET.PLATFORMS',
    organization: org,
    assembly: assem,
    environment: env,
    platforms: plats
  };
}

export function setPlatformIps(org, assem, env, plat, ips) {
  return {
    type: 'organizations.SET.PLATFORMS.IPS',
    organization: org,
    assembly: assem,
    environment: env,
    platform: plat,
    ips: ips
  };
}

export function setFdqns(org, assem, env, plat, fdqns) {
  return {
    type: 'organizations.SET.PLATFORMS.FDQNS',
    organization: org,
    assemblyName: assem,
    environmentName: env,
    platformName: plat,
    fdqns: fdqns
  };
}

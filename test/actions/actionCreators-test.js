/**
 * Created by Oakley Hall on 7/22/16.
 */
import { expect } from 'chai';
import {setOrgs} from '../../src/app/actions/actionCreators';
import {setSelectedOrg} from '../../src/app/actions/actionCreators';
import {setAssemblies} from '../../src/app/actions/actionCreators';
import {setEnvironments} from '../../src/app/actions/actionCreators';

const orgs = ['fooOrg', 'barOrg'];
const assems = ['fooAssem', 'barAssem'];
const envs = ['fooEnv', 'barEnv'];

describe('setOrgs action', () => {
  it('return the correct action object', () => {
    expect( setOrgs(orgs) ).to.deep.equal({
      type: 'organizations.SET.ORGS',
      organizations: orgs
    });
  });
});

describe('setSelectedOrg action', () => {
  it('return the correct action object', () => {
    expect( setSelectedOrg(orgs[0]) ).to.deep.equal({
      type: 'organizations.SET.SELECTED',
      selectedOrganization: orgs[0]
    });
  });
});

describe('setAssemblies action', () => {
  it('return the correct action object', () => {
    expect( setAssemblies(assems, orgs[0]) ).to.deep.equal({
      type: 'organizations.SET.ASSEMBLIES',
      assemblies: assems,
      organization: orgs[0]
    });
  });
});

describe('setEnvironments action', () => {
  it('return the correct action object', () => {
    expect( setEnvironments(orgs[0], assems[0] , envs) ).to.deep.equal({
      type: 'organizations.SET.ENVS',
      organization: orgs[0],
      assembly: assems[0],
      environments: envs
    });
  });
});


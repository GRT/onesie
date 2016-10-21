import {doGet} from './base-request';


/**
 * @param error - error callback
 *
 * @param params - parameter object. Ex:
 *
 * {
 *  ooOrganization : 'SomeOrg',
 *  ooAssembly : 'SomeAssembly',
 *  ooEnvironment : 'SomeEnv',
 *  ooPlatform : 'SomePlatform'
 * }
 *
 * @param callback  - callback
 */

export default function (error, params, callback) {
  const path = '/' + params.ooOrganization +
    '/assemblies/' + params.ooAssembly +
    '/environments/' + params.ooEnvironment +
    '/platforms/' + params.ooPlatform +
    '/fqdn/instances.json';
  doGet(error, path, instances => {
    callback(instances.data.map(inst => JSON.parse(inst.ciAttributes.entries) ));
  });
}
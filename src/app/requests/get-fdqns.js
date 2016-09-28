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
    '/operations' + '/environments/' + params.ooEnvironment +
    '/platforms/' + params.ooPlatform +
    '/components/fqdn/instances.json';
  doGet(error, path, instances => {
    callback(instances.map(inst => JSON.parse(inst.ciAttributes.entries) ));
  });
}
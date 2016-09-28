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
    '/components/compute/instances.json?instances_state=all';
  doGet(error, path, instances => {

    callback(instances.map(inst => {
      return {hostname: inst.ciAttributes.hostname , ip: inst.ciAttributes.public_ip};
    }));
  });
}
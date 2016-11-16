/**
 * Created by Oakley Hall on 3/23/16.
 */

import {doGet} from './base-request';

/**
 * @param error - error callback
 *
 * @param params - parameter object. Ex:
 *
 * {
 *  ooOrganization : 'SomeOrg',
 * }
 *
 * @param callback  - callback
 */
export default function (error, params, callback) {
  const path = '/' + params.ooOrganization + '/assemblies/' +
    params.ooAssembly + '/environments.json';
  doGet(error,path, orgArray => { callback(orgArray); });
}
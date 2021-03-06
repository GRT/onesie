/**
 * Created by Oakley Hall on 3/21/16.
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
  const path =  '/' + params.ooOrganization + '/assemblies/' +
    params.ooAssembly + '/environments/' + params.ooEnvironment + '/platforms.json' ;
  doGet(error,path, platformArray => { callback(platformArray.data); });
}
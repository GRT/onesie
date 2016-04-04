//import {doGet} from './base-request';
//import config from '../../../../config';
//import join from 'url-join';

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
 * @param callback  - error callback
 */
export default function (error, params, callback) {

  callback(['213.324.34',
            '214.34.34',
            '234.324.23',
            '134.32.234']);

  //const path = join( '/', params.ooOrganization,
  //                   'assemblies', params.ooAssembly,
  //                   'operations','environments', params.ooEnvironment,
  //                   'platforms', params.ooPlatform);

  //doGet(error, path, callback );
}
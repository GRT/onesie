import {doGet} from './base-request';
import config from '../../../../config';
import join from 'url-join';

export default function (error, params, callback) {

  const path = join( '/', params.ooOrganization,
                     'assemblies', params.ooAssembly,
                     'operations','environments', params.ooEnvironment,
                     'platforms', params.ooPlatform);

  doGet(error, path, callback );
}
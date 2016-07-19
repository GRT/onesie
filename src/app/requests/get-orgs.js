/**
 * Created by Oakley Hall on 3/21/16.
 */

import {doGet} from './base-request';

/**
 * @param error - error callback
 *
 * @param callback  - callback
 */
export default function (error, callback) {
  const path = '/account/organizations.json';
  doGet(error,path, orgArray => { callback(orgArray); });
}
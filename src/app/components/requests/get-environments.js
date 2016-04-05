/**
 * Created by Oakley Hall on 3/23/16.
 */

/**
 * @param error - error callback
 *
 * @param callback  - callback
 */
export default function (error, callback) {
  callback(['DEV',
    'PROD',
    'QA',
    'STAGE']);
}
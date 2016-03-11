import ips from 'one-ips';
import config from '../../../../config';

export default function (error, org, assem, env, plat, callback) => {
  ips(error, {
    ooHost : config.host,
    ooAPIToken : config.host,
    ooOrganization : org,
    ooAssembly : assem,
    ooEnvironment : env,
    ooPlatform : plat
  }, callback );
}
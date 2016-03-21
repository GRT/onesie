/**
 * Created by Oakley Hall on 3/21/16.
 */

export default function (error, params, callback) {
  const assems = {
    'GRT':['primer', 'onesie', 'landline', 'jenkins'] ,
    'Mr. Lee\'s Greater Hong Kong': ['information', 'marketeering', 'ecology'],
    'Nova Sicilia': ['Cosa Nostra Pizza', 'Deliverator'],
    'The Raft': ['Rife', 'Enki', 'Enki'],
    'Reverend Wayne\'s Pearly Gates': ['Asherah', 'Elvis', 'meta-virus']
  };

  callback(assems[params.ooOrganization]);
}
import { expect } from 'chai';
import orgs from '../../../src/app/components/requests/get-orgs'

describe('Org request module', () => {
  it('should pass an array to callback', (done) => {
    orgs(null, (res)=>{
      expect(res).to.be.an('array');
      done();
    });
  });
});
import { expect } from 'chai';
import assem from '../../../src/app/components/requests/get-assemblies'

describe('Org request module', () => {
  assem(null, {ooOrganization:'GRT'}, (res) => {
    it('should pass an array to callback depending on params', () => {
      expect(res).to.be.an('array');
    });
  });
});
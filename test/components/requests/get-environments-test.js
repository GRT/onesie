import { expect } from 'chai';
import envs from '../../../src/app/components/requests/get-environments';

describe('Environments request module', () => {
  envs(null, (res) => {
    it('should pass an array Environments to callback', () => {
      expect(res).to.be.an('array');
    });
  });
});
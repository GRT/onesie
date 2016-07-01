import { expect } from 'chai';
import ips from '../../../src/app/requests/get-ips'

describe('IPs request module', () => {
  ips(null, {}, (res) => {
    it('should pass an array ips to callback', () => {
      expect(res).to.be.an('array');
    });
  });
});
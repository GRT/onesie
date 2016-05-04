import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Scroll from '../src/app/components/scroll.jsx';

describe('<Scroll />', () => {
  const scroll = shallow(<Scroll />);
  const primer = scroll.find('#primer');
  const onesie = scroll.find('#onesie');
  const landline = scroll.find('#landline');
  const jenkins = scroll.find('#jenkins');
  const slacker = scroll.find('#slacker');

  it('has one primer component', () => {
    expect(primer).to.have.length.of(1);
  });

  it('has one primer component', () => {
    expect(onesie).to.have.length.of(1);
  });

  it('has one primer component', () => {
    expect(landline).to.have.length.of(1);
  });

  it('has one primer component', () => {
    expect(jenkins).to.have.length.of(1);
  });

  it('has one primer component', () => {
    expect(slacker).to.have.length.of(1);
  });

  it('the primer component contains string "primer" ', () => {
    expect(primer.props().children).to.equal('primer');
  });

  it('the onesie component contains string "onesie" ', () => {
    expect(onesie.props().children).to.equal('onesie');
  });

  it('the landline component contains string "landline" ', () => {
    expect(landline.props().children).to.equal('landline');
  });

  it('the jenkins component contains string "jenkins" ', () => {
    expect(jenkins.props().children).to.equal('jenkins');
  });

  it('the slacker component contains string "slacker-acorn" ', () => {
    expect(slacker.props().children).to.equal('slacker-acorn');
  });
});

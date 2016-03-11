import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import World from '../src/app/components/world.jsx'

describe('<World />', () => {
  const hello = shallow(<World />);
  const header = hello.find('h1');

  it('has one H1 component', () => {
    expect(header).to.have.length.of(1);
  });

  it('the H1 component contains string "World" ', () => {
    expect(header.props().children).to.equal('World');
  });
});
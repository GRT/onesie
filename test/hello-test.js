import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Hello from '../src/app/components/hello.jsx'

describe('<Hello />', () => {
    const hello = shallow(<Hello />);
    const header = hello.find('h1');

  it('has one H1 component', () => {
    expect(header).to.have.length.of(1);
  });

  it('the H1 component contains string "Hello" ', () => {
    expect(header.props().children).to.equal('Hello');
  });
});
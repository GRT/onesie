import React from 'react';
import { mount, shallow } from 'enzyme';
import Hello from '../src/app/components/hello.jsx'

describe('<Foo />', () => {

  it('calls componentDidMount', () => {
    const wrapper = mount(<Hello />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
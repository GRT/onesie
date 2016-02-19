import React from 'react';
import { mount, shallow } from 'enzyme';
import World from '../src/app/components/world.jsx'

describe('<Foo />', () => {

  it('calls componentDidMount', () => {
    const wrapper = mount(<World />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
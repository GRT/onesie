import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Scroll from '../src/app/components/scroll.jsx';

const fakeAjax = function fakeAjax () {
  return [{ciName:'foo'},{ciName:'bar'},{ciName:'baz'}];
};

describe('<Scroll />', () => {
  const scroll = mount(<Scroll ajaxFunc={fakeAjax} ajaxParams={{}} />);
  const divs = scroll.find('div');
  it('has three divs', () => { expect(divs).to.have.length.of(3); });

});

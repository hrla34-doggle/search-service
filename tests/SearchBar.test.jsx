/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Jest from '../jest.config';

import SearchBar from '../client/src/components/SearchBar';

describe('<SearchBar />', () => {
  it('should render the SearchBar component on the screen', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toExist();
  });
});

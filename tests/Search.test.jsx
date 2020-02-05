/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Jest from '../jest.config';

import Search from '../client/src/components/Search';

describe('<Search />', () => {
  const fakeQueryResults = [
    ['Wonders of Egypt Winter 2020', 10],
    ['Adventures In Egypt Winter 2020', 11],
    ['Majestic Egypt Fall 2020', 50],
  ];

  it('should render the Search component on the screen', () => {
    const wrapper = shallow(<Search searchResults={fakeQueryResults} />);
    expect(wrapper).toExist();
  });
});

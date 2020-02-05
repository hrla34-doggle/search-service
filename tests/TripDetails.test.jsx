/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Jest from '../jest.config';

import TripDetails from '../client/src/components/TripDetails';

describe('<TripDetails />', () => {
  it('should render the TripDetails component on the screen', () => {
    const wrapper = shallow(<TripDetails />);
    expect(wrapper).toExist();
  });
});

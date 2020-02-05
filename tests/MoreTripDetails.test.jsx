/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Jest from '../jest.config';

import MoreTripDetails from '../client/src/components/MoreTripDetails';

describe('<MoreTripDetails />', () => {
  it('should render the MoreTripDetails component on the screen', () => {
    const wrapper = shallow(<MoreTripDetails />);
    expect(wrapper).toExist();
  });
});

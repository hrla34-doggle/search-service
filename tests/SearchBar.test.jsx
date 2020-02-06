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

  it('should invoke getAllTrips on componentDidMount', () => {
    const wrapper = shallow(<SearchBar />);
    const mock = jest.fn();
    wrapper.instance().getAllTrips = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  });

  it('should also invoke getOneTrip on componentDidMount', () => {
    const wrapper = shallow(<SearchBar />);
    const mock = jest.fn();
    wrapper.instance().getOneTrip = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  });

  it('should toggle customersInfo and agentsInfo on click', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toHaveState('customersInfo', true);
    expect(wrapper).toHaveState('agentsInfo', false);
    const agentsButton = wrapper.find('li').last();
    agentsButton.simulate('click');
    expect(wrapper).toHaveState('customersInfo', false);
    expect(wrapper).toHaveState('agentsInfo', true);
  });
});

/* eslint-disable max-len */
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

  it('should render the Search component, which has an input form and image', () => {
    const wrapper = shallow(<Search searchResults={[]} />);
    expect(wrapper).toExist();
    expect((wrapper).find('form')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render the correct search results', () => {
    const wrapper = shallow(<Search searchResults={fakeQueryResults} />);
    expect(wrapper.find('.BPsearchResults')).toHaveLength(3);
    const results = wrapper.find('.BPsearchResults').map((node) => node.text());
    expect(results[0]).toEqual('Wonders of Egypt Winter 2020');
    expect(results[1]).toEqual('Adventures In Egypt Winter 2020');
    expect(results[2]).toEqual('Majestic Egypt Fall 2020');
  });

  it('should invoke the updateQuery function when the user types a query', () => {
    const mockChangeHandler = jest.fn();
    const wrapper = shallow(<Search searchResults={[]} updateQuery={mockChangeHandler} />);
    wrapper.find('input').simulate('change');
    expect(mockChangeHandler).toHaveBeenCalled();
  });

  it('should invoke the getOneTrip function when the user clicks on a search result', () => {
    const mockClickHandler = jest.fn();
    const wrapper = shallow(<Search searchResults={fakeQueryResults} getOneTrip={mockClickHandler} />);
    const firstResult = wrapper.find('.BPsearchResults').first();
    firstResult.simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();
  });
});

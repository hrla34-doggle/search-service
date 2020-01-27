/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDom, { render } from 'react-dom';
import Axios from 'axios'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips : [],
      currentTrip : [],
      search : ''
    };
this.getAllTrips = this.getAllTrips.bind(this);

  }

getAllTrips () {
  // initial request for when the page first loads
  // to retrieve the name/season/year/id for each trip
  // store as allTrips in this.state
  // use name/season/year for search results dropdown
  // and id of a selected trip to retrieve the complete trip info
  Axios.get('/api/trips')
  .then (trips => this.setState({
    allTrips: trips.data
  }), console.log(this.state.allTrips))
  .catch (err => console.error(err))
}

componentDidMount () {
  this.getAllTrips();
}



  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

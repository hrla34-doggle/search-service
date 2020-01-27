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
      allTrips: [],
      currentTrip: [],
      search: '',
      customersInfo: true,
      agentsInfo: false
    };
    this.getAllTrips = this.getAllTrips.bind(this);
    this.getOneTrip = this.getOneTrip.bind(this);
    this.toggleCustomers = this.toggleCustomers.bind(this);
    this.toggleAgents = this.toggleAgents.bind(this);

  }

  getAllTrips() {
    // initial request for when the page first loads
    // to retrieve the name/season/year/id for each trip
    // store as allTrips in this.state
    // use name/season/year for search results dropdown
    // and id of a selected trip to retrieve the complete trip info
    Axios.get('/api/trips')
      .then(trips => this.setState({
        allTrips: trips.data
      }), console.log(this.state.allTrips))
      .catch(err => console.error(err))
  }

  getOneTrip(id) {
    // when user selects a trip, use its id to get all the info from that trip
    // and store the info in this.state as currentTrip
    // then will need to re-render the page accordingly with that data
    // also run this with a random id (between 1-100) when page first loads
    Axios.get(`/api/trips/${id}`)
      .then(trip => this.setState({
        currentTrip: trip.data
      }), console.log(this.state.currentTrip))
      .catch(err => console.error(err))
  }

  toggleCustomers() {
    // shows customers contact #
    this.setState({
      customersInfo: true,
      agentsInfo: false
    })
  }

  toggleAgents() {
    // shows agents contact #
    this.setState({
      customersInfo: false,
      agentsInfo: true
    })
  }

  componentDidMount() {
    this.getAllTrips();
    this.getOneTrip(Math.floor(Math.random() * 100) + 1);
  }

  render() {
    var customersInfoStyle = {
      fontWeight: this.state.customersInfo ? 'bold' : 'normal'
    }
    var agentsInfoStyle = {
      fontWeight: this.state.agentsInfo ? 'bold' : 'normal'
    }
    return (
      <div>
        <header>
          <nav>
            <table>
              <tbody>
                <tr>
                  <td><a href='#' id='Trafalgar'> Trafalgar </a></td>
                  <td ><span> <h2>SEARCH BAR GOES HERE AND STRETCHES ACROSS PAGE</h2> </span></td>
                  <td id='customers_agents'> <div><span style={customersInfoStyle} onClick={this.toggleCustomers}>Customers</span></div> <div><span style={agentsInfoStyle} onClick={this.toggleAgents}>Agents</span></div></td>
                  <td>phone icon</td>
                  <td id='customersAgentsSwitch'>{this.state.customersInfo ? <div><span style={{ 'font-weight': 'bold' }}>866 513 1995</span><br /> Can we help you?</div> : <div><span style={{ 'font-weight': 'bold' }}>800 854 0103</span><br /> or call your travel agent</div>}</td>
                </tr>
                <tr>
                  <td> <span>hi</span></td>
                  <td> <span>hi</span></td>
                  <td> <span>hi</span></td>
                </tr>
              </tbody>
            </table>
          </nav>
        </header>
      </div>
    );
  }
}




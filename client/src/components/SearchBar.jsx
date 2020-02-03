/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDom, { render } from 'react-dom';
import Axios from 'axios';
import TripDetails from './TripDetails';
import Search from './Search';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [],
      currentTrip: [],
      query: '',
      queryResults: [],
      customersInfo: true,
      agentsInfo: false,
    };
    this.getAllTrips = this.getAllTrips.bind(this);
    this.getOneTrip = this.getOneTrip.bind(this);
    this.toggleCustomers = this.toggleCustomers.bind(this);
    this.toggleAgents = this.toggleAgents.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  getAllTrips() {
    // initial request for when the page first loads
    // to retrieve the name/season/year/id for each trip
    // store as allTrips in this.state
    // use name/season/year for search results dropdown
    // and id of a selected trip to retrieve the complete trip info
    Axios.get('/api/trips')
      .then((trips) => this.setState({
        allTrips: trips.data,
      }, () => console.log(this.state.allTrips)))
      .catch((err) => console.error(err));
  }

  getOneTrip(id) {
    // when user selects a trip, use its id to get all the info from that trip
    // and store the info in this.state as currentTrip
    // then will need to re-render the page accordingly with that data
    // also run this with a random id (between 1-100) when page first loads
    if (id === 0) { return; }
    Axios.get(`/api/trips/${id}`)
      .then((trip) => this.setState({
        currentTrip: trip.data,
      }, () => console.log(this.state.currentTrip)))
      .catch((err) => console.error(err));
  }

  updateQuery(e) {
    // as user types in search bar, update the state with their text
    // run function to update search results each time
    this.setState({
      query: e.target.value,
    }, () => this.updateSearchResults());
  }

  updateSearchResults() {
    const search = this.state.query;
    // if user has typed less than 3 letters, don't check for results
    if (search.length > 0 && search.length < 3) {
      this.setState({
        queryResults: [['Keep typing to see results', 0]],
      });
    }
    // each result will be structured as tuple with name/season/year for display then id for fetching data
    // get results by matching trips whose name includes the query (not case-sensitive)
    if (search.length >= 3) {
      const results = this.state.allTrips.filter((trip) => trip[1].toUpperCase().includes(search.toUpperCase()));
      let updatedTrips = results.map((result) => [`${result[1]} ${result[2]} ${result[3]}`, result[0]]);
      if (updatedTrips.length === 0) {
        updatedTrips = [['Sorry, no results found', 0]];
      }
      this.setState({
        queryResults: updatedTrips,
      });
    }
  }

  toggleCustomers() {
    // shows customers contact #
    this.setState({
      customersInfo: true,
      agentsInfo: false,
    });
  }

  toggleAgents() {
    // shows agents contact #
    this.setState({
      customersInfo: false,
      agentsInfo: true,
    });
  }

  componentDidMount() {
    // when the page first renders, get all trips' info and also pick a random trip to display its info
    this.getAllTrips();
    this.getOneTrip(Math.floor(Math.random() * 100) + 1);
  }

  render() {
    const customersInfoStyle = {
      fontWeight: this.state.customersInfo ? 'bold' : 'normal',
    };
    const agentsInfoStyle = {
      fontWeight: this.state.agentsInfo ? 'bold' : 'normal',
    };
    return (
      <div>
        <div className="BPheader">
          <div><a href="#" id="BPTrafalgar"> Trafalgar </a></div>
          <div id="BPsearchbarlocation"><Search searchResults={this.state.queryResults} updateQuery={this.updateQuery} getOneTrip={this.getOneTrip} /></div>
          <div id="BPcustomers_agents">
            <ul>
              <li style={customersInfoStyle} onClick={this.toggleCustomers}>Customers</li>
              <li style={agentsInfoStyle} onClick={this.toggleAgents}>Agents</li>
            </ul>
          </div>
          <img id="BPphone_Receiver" src="./graphics/phone.svg.png" alt="phone receiver" />
          <div id="BPcustomers_Agents_Switch">
            {this.state.customersInfo ? (
              <div>
                <span style={{ fontWeight: 'bold' }}>866 513 1995</span>
                <br />
                {' '}
                        Can we help you?
              </div>
            ) : (
              <div>
                <span style={{ fontWeight: 'bold' }}>800 854 0103</span>
                <br />
                {' '}
                          or call your travel agent
              </div>
            )}
          </div>
        </div>

        <div className="BPheader2">
          <div className="BProw2part1" id="BPdestinations">
            {' '}
            <span>DESTINATIONS</span>
            <i className="BPdownArrow" />
            <div className="BPdestinationsDropdown">
              <div style={{ border: 'none' }}>
EUROPE
                <i className="BPrightArrow" />
              </div>
              <div>
LATIN AMERICA
                <i className="BPrightArrow" />
              </div>

              <div>
USA, CANADA, AND MEXICO
                <i className="BPrightArrow" />
              </div>

              <div>
AFRICA AND MIDDLE EAST
                <i className="BPrightArrow" />
              </div>

              <div>
ASIA
                <i className="BPrightArrow" />
              </div>

              <div>
AUSTRALIA AND NEW ZEALAND
                <i className="BPrightArrow" />
              </div>

            </div>
          </div>

          <div className="BProw2part1" id="BPdeals">
            {' '}
            <span>DEALS</span>
            <i className="BPdownArrow" />
            <div className="BPdealsDropdown">

              <div style={{ border: 'none' }}>
DEALS
                <br />
                            Our latest offers, making travel more affordable
              </div>
              <div>
EARLY PAYMENT DISCOUNTS
                {' '}
                <br />
                              Book early and save 7.5%* on select trips
                <i className="BPrightArrow" />

              </div>
              <div>
EUROPE 2020
                {' '}
                <br />
                              SAVE up to 7.5% on select 2020 trips + $300 off Europe Flights
                <i className="BPrightArrow" />
              </div>

              <div>
YEAR ROUND SAVINGS
                {' '}
                <br />
                              Savings for groups, multi trip bookings and more
                <i className="BPrightArrow" />
              </div>
              <div>
LAST MINUTE DEALS
                {' '}
                <br />
                              Save on soon to depart trips
                <i className="BPrightArrow" />
              </div>

              <div>
SOLO TRAVELER DEALS
                {' '}
                <br />
                              Savings for solo travelers
                <i className="BPrightArrow" />
              </div>

              <div>
TODAY'S BEST OFFERS
                {' '}
                <br />
                              Worldwide travel deals. Here today. Gone tomorrow.
                <i className="BPrightArrow" />
              </div>
              <div>
PAST GUEST EXCLUSIVE OFFERS
                {' '}
                <br />
                              Savings for our Very Important Travelers
                <i className="BPrightArrow" />
              </div>
            </div>
          </div>

          <div className="BProw2part1" id="BPaboutus">
            {' '}
            <span>ABOUT US</span>
            <i className="BPdownArrow" />
            <div style={{ border: 'none' }} className="BPaboutusDropdown">
              <div>
ABOUT US
                <br />
                            For over 70 years, we've carefully crafted our trips with one goal in mind; to enable our guests to live The Good Life
              </div>
              <div>
EXPLORE MORE
                {' '}
                <br />
                              About Be My Guest

                <i className="BPrightArrow" />
              </div>
              <div>
WHO WE ARE
                {' '}
                <br />
                              We are the world's leading and most awarded travel brand
                <i className="BPrightArrow" />
              </div>
              <div>
MAKE A DIFFERENCE
                {' '}
                <br />
                              Travel today, sustain tomorrow
                <i className="BPrightArrow" />
              </div>
              <div>
TRAFALGAR HIGHLIGHTS
                {' '}
                <br />
                              Our unique experiences that connect you to the world
                <i className="BPrightArrow" />
              </div>
              <div>
WHAT OUR GUESTS SAY
                {' '}
                <br />
                              Our live, unedited reviews
                <i className="BPrightArrow" />
              </div>
              <div>
BROCHURES
                {' '}
                <br />
                              Request a brochure and start dreaming
                <i className="BPrightArrow" />
              </div>
              <div>
MOMENTS
                {' '}
                <br />
                              7 continents. 302 trips. Magic moments on every one.
                <i className="BPrightArrow" />
              </div>
              <div>
TRAFALGAR LIVE
                {' '}
                <br />
                              Share your moments with #SimplyTrafalgar
                <i className="BPrightArrow" />
              </div>
              <div>
5 REASONS TO BOOK NOW
                {' '}
                <br />
                              Be confident
                <i className="BPrightArrow" />
              </div>
            </div>
          </div>

          <div className="BProw2part1" id="BPmakeadifference">
            {' '}
            <span>MAKE A DIFFERENCE</span>
            <i className="BPdownArrow" />
            <div style={{ border: 'none' }} className="BPmakeadifferenceDropdown">

              <div>
JoinTrafalgar
                <br />
                            72 countries. 7 continents. Through JoinTrafalgar, we are doing our part to have a positive impact on the places we visit and the people who call them home.
              </div>
              <div>
OUR STORY
                {' '}
                <br />
                              A decade of positive impact
                <i className="BPrightArrow" />
              </div>
              <div>
WHAT WE DO
                {' '}
                <br />
                              We do our part wherever we can
                <i className="BPrightArrow" />
              </div>
              <div>
OUR PLEDGE
                {' '}
                <br />
                              Make travel matter to people, places and wildlife
                <i className="BPrightArrow" />
              </div>
              <div>
TREADRIGHT
                <br />
                              Supporting over 50 sustainable travel projects
                <i className="BPrightArrow" />
              </div>
            </div>
          </div>

          <div className="BProw2part2">
            {' '}
            <span>Get a Quote</span>
          </div>

          <div className="BProw2part2" id="BPbrands">
            {' '}
            <span>Brands</span>
            <i className="BPdownArrow" />
            <div className="BPbrandsDropdown">
              <img className="BPbrandsDropdownImg" src="./graphics/BrendanVacations.png" alt="Brendan Vacations" />
              <img className="BPbrandsDrowdownImg" src="./graphics/Costsaver.webp" alt="Costsaver" />
            </div>
          </div>

          <div className="BProw2part2">
            {' '}
            <span>Agents Login</span>
          </div>

          <div className="BProw2part2">
            {' '}
            <img id="BPuserAvatar" src="./graphics/user.svg.png" alt="User Avatar" />
            <span>
                      My Trafalgar
              <i className="BPdownArrow" />
            </span>
            <div className="BPmyTrafalgarDropdown">
              <a href="#">
                        Log in
                <i className="BPrightArrow" />
              </a>
              <a href="#">
                        Sign up
                <i className="BPrightArrow" />
              </a>
              <a href="#">
                        Manage My Booking
                <i className="BPrightArrow" />
              </a>
            </div>
          </div>
        </div>
        {this.state.currentTrip.length > 0 ? <TripDetails trip={this.state.currentTrip[0]} /> : null}
      </div>
    );
  }
}

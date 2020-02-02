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
import Search from './Search';
import MoreTripDetails from './MoreTripDetails';

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
        <header>
          <nav>
            <table>
              <tbody>
                <tr className="row1">
                  <span><a href="#" id="Trafalgar"> Trafalgar </a></span>
                  <td>
                    <span>
                      {' '}
                      <Search searchResults={this.state.queryResults} updateQuery={this.updateQuery} getOneTrip={this.getOneTrip} />
                      {' '}
                    </span>
                  </td>
                  <td id="customers_agents">
                    {' '}
                    <div><span style={customersInfoStyle} onClick={this.toggleCustomers}>Customers</span></div>
                    {' '}
                    <div><span style={agentsInfoStyle} onClick={this.toggleAgents}>Agents</span></div>
                  </td>
                  <td><img id="phoneReceiver" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Telephone_receiver.svg/1920px-Telephone_receiver.svg.png" alt="phone receiver" /></td>
                  <td id="customersAgentsSwitch">
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
                  </td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <td className="row2part1" id="destinations">
                    {' '}
                    <span>DESTINATIONS</span>
                    <i className="downArrow" />
                    <div className="destinationsDropdown">
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ border: 'none' }}>
                              <span className="tableHead">EUROPE</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">LATIN AMERICA</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">USA, CANADA, AND MEXICO</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">AFRICA AND MIDDLE EAST</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">ASIA</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">AUSTRALIA AND NEW ZEALAND</span>
                              <i className="rightArrow" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className="row2part1" id="deals">
                    {' '}
                    <span>DEALS</span>
                    <i className="downArrow" />
                    <div className="dealsDropdown">
                      <table>
                        <tbody>
                          <tr>
                            <span className="tableHead">DEALS</span>
                            <br />
                            Our latest offers, making travel more affordable
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">EARLY PAYMENT DISCOUNTS</span>
                              {' '}
                              <br />
                              Book early and save 7.5%* on select trips
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">EUROPE 2020</span>
                              {' '}
                              <br />
                              SAVE up to 7.5% on select 2020 trips + $300 off Europe Flights
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">YEAR ROUND SAVINGS</span>
                              {' '}
                              <br />
                              Savings for groups, multi trip bookings and more
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">LAST MINUTE DEALS</span>
                              {' '}
                              <br />
                              Save on soon to depart trips
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">SOLO TRAVELER DEALS</span>
                              {' '}
                              <br />
                              Savings for solo travelers
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">TODAY'S BEST OFFERS</span>
                              {' '}
                              <br />
                              Worldwide travel deals. Here today. Gone tomorrow.
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">PAST GUEST EXCLUSIVE OFFERS</span>
                              {' '}
                              <br />
                              Savings for our Very Important Travelers
                              <i className="rightArrow" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className="row2part1" id="aboutus">
                    {' '}
                    <span>ABOUT US</span>
                    <i className="downArrow" />
                    <div className="aboutusDropdown">
                      <table>
                        <tbody>
                          <tr>
                            <span className="tableHead">ABOUT US</span>
                            <br />
                            For over 70 years, we've carefully crafted our trips with one goal in mind; to enable our guests to live The Good Life
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">EXPLORE MORE</span>
                              {' '}
                              <br />
                              About Be My Guest
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">WHO WE ARE</span>
                              {' '}
                              <br />
                              We are the world's leading and most awarded travel brand
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">MAKE A DIFFERENCE</span>
                              {' '}
                              <br />
                              Travel today, sustain tomorrow
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">TRAFALGAR HIGHLIGHTS</span>
                              {' '}
                              <br />
                              Our unique experiences that connect you to the world
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">WHAT OUR GUESTS SAY</span>
                              {' '}
                              <br />
                              Our live, unedited reviews
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">BROCHURES</span>
                              {' '}
                              <br />
                              Request a brochure and start dreaming
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">MOMENTS</span>
                              {' '}
                              <br />
                              7 continents. 302 trips. Magic moments on every one.
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">TRAFALGAR LIVE</span>
                              {' '}
                              <br />
                              Share your moments with #SimplyTrafalgar
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">5 REASONS TO BOOK NOW</span>
                              {' '}
                              <br />
                              Be confident
                              <i className="rightArrow" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className="row2part1" id="makeadifference">
                    {' '}
                    <span>MAKE A DIFFERENCE</span>
                    <i className="downArrow" />
                    <div className="makeadifferenceDropdown">
                      <table>
                        <tbody>
                          <tr>
                            <span className="tableHead">JoinTrafalgar</span>
                            <br />
                            72 countries. 7 continents.
                            {' '}
                            <br />
                            Through JoinTrafalgar, we are doing our part to have a positive impact on the places we visit and the people who call them home.
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">OUR STORY</span>
                              {' '}
                              <br />
                              A decade of positive impact
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">WHAT WE DO</span>
                              {' '}
                              <br />
                              We do our part wherever we can
                              <i className="rightArrow" />
                            </td>
                            <td>
                              <span className="tableHead">OUR PLEDGE</span>
                              {' '}
                              <br />
                              Make travel matter to people, places and wildlife
                              <i className="rightArrow" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="tableHead">TREADRIGHT</span>
                              <br />
                              Supporting over 50 sustainable travel projects
                              <i className="rightArrow" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className="row2part2">
                    {' '}
                    <span>Get a Quote</span>
                  </td>

                  <td className="row2part2" id="brands">
                    {' '}
                    <span>Brands</span>
                    <i className="downArrow" />
                    <div className="brandsDropdown">
                      <table>
                        <tbody>
                          <tr>
                            <td><img className="brandsDropdownImg" src="https://searchlogovector.com/wp-content/uploads/2018/12/brendan-vacations-logo-vector.png" alt="Brendan Vacations" /></td>
                            <td><img className="brandsDrowdownImg" src="https://www.costsavertour.com/-/media/Project/Costsaver/costsaver-logo.png" alt="Costsaver" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className="row2part2">
                    {' '}
                    <span>Agents Login</span>
                  </td>

                  <td className="row2part2img">
                    {' '}
                    <img id="userAvatar" src="https://huntpng.com/images250/avatar-pic-circle-png-10.png" alt="User Avatar" />
                    <span>
                      My Trafalgar
                      <i className="downArrow" />
                    </span>
                    <div style={{ marginTop: '35px' }} className="myTrafalgarDropdown">
                      <a href="#">
                        Log in
                        <i className="rightArrow" />
                      </a>
                      <a href="#">
                        Sign up
                        <i className="rightArrow" />
                      </a>
                      <a href="#">
                        Manage My Booking
                        <i className="rightArrow" />
                      </a>

                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {this.state.currentTrip.length > 0 ? <MoreTripDetails trip={this.state.currentTrip[0]} /> : null}
          </nav>
        </header>
      </div>
    );
  }
}

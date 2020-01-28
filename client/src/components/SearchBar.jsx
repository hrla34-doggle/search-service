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
                  <td><span> <h2>SEARCH BAR GOES HERE AND ACROSS THE PAGE</h2> </span></td>
                  <td id='customers_agents'> <div><span style={customersInfoStyle} onClick={this.toggleCustomers}>Customers</span></div> <div><span style={agentsInfoStyle} onClick={this.toggleAgents}>Agents</span></div></td>
                  <td><img id='phoneReceiver' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Telephone_receiver.svg/1920px-Telephone_receiver.svg.png'></img></td>
                  <td id='customersAgentsSwitch'>{this.state.customersInfo ? <div><span style={{ 'fontWeight': 'bold' }}>866 513 1995</span><br /> Can we help you?</div> : <div><span style={{ 'fontWeight': 'bold' }}>800 854 0103</span><br /> or call your travel agent</div>}</td>
                </tr>

                <tr>
                  <td className='row2part1' > <span>DESTINATIONS</span><i className='downArrow'></i></td>

                  <td className='row2part1' id='deals'> <span>DEALS</span><i className='downArrow'></i>
                    <div className='dealsDropdown'>
                      <table>
                        <tbody>
                          <tr>
                            <span className='tableHead'>DEALS</span><br />Our latest offers, making travel more affordable
                          </tr>
                          <tr>
                            <td><span className='tableHead'>EARLY PAYMENT DISCOUNTS</span> <br />Book early and save 7.5%* on select trips<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>EUROPE 2020</span> <br />SAVE up to 7.5% on select 2020 trips + $300 off Europe Flights<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>YEAR ROUND SAVINGS</span> <br />Savings for groups, multi trip bookings and more<i className='rightArrow'></i></td>
                          </tr>
                          <tr>
                            <td><span className='tableHead'>LAST MINUTE DEALS</span> <br />Save on soon to depart trips<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>SOLO TRAVELER DEALS</span> <br />Savings for solo travelers<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>TODAY'S BEST OFFERS</span> <br />Worldwide travel deals. Here today. Gone tomorrow.<i className='rightArrow'></i></td>
                          </tr>
                          <tr>
                            <td><span className='tableHead'>PAST GUEST EXCLUSIVE OFFERS</span> <br />Savings for our Very Important Travelers<i className='rightArrow'></i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className='row2part1' id='aboutus'> <span>ABOUT US</span><i className='downArrow'></i>
                    <div className='aboutusDropdown'>
                      <table>
                        <tbody>
                          <tr>
                            <span className='tableHead'>ABOUT US</span><br />For over 70 years, we've carefully crafted our trips with one goal in mind; to enable our guests to live The Good Life
                          </tr>
                          <tr>
                            <td><span className='tableHead'>EXPLORE MORE</span> <br />About Be My Guest<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>WHO WE ARE</span> <br />We are the world's leading and most awarded travel brand<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>MAKE A DIFFERENCE</span> <br />Travel today, sustain tomorrow<i className='rightArrow'></i></td>
                          </tr>
                          <tr>
                            <td><span className='tableHead'>TRAFALGAR HIGHLIGHTS</span> <br />Our unique experiences that connect you to the world<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>WHAT OUR GUESTS SAY</span> <br />Our live, unedited reviews<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>BROCHURES</span> <br />Request a brochure and start dreaming<i className='rightArrow'></i></td>
                          </tr>
                          <tr>
                            <td><span className='tableHead'>MOMENTS</span> <br />7 continents. 302 trips. Magic moments on every one.<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>TRAFALGAR LIVE</span> <br />Share your moments with #SimplyTrafalgar<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>5 REASONS TO BOOK NOW</span> <br />Be confident<i className='rightArrow'></i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className='row2part1' id='makeadifference'> <span>MAKE A DIFFERENCE</span><i className='downArrow'></i>
                    <div className='makeadifferenceDropdown'>
                      <table>
                        <tbody>
                          <tr>
                            <span className='tableHead'>JoinTrafalgar</span><br />72 countries. 7 continents. <br/>Through JoinTrafalgar, we are doing our part to have a positive impact on the places we visit and the people who call them home.
                          </tr>
                          <tr>
                            <td><span className='tableHead'>OUR STORY</span> <br />A decade of positive impact<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>WHAT WE DO</span> <br />We do our part wherever we can<i className='rightArrow'></i></td>
                            <td><span className='tableHead'>OUR PLEDGE</span> <br />Make travel matter to people, places and wildlife<i className='rightArrow'></i></td>
                          </tr>
                          <tr>
                            <td><span className='tableHead'>TREADRIGHT</span><br />Supporting over 50 sustainable travel projects<i className='rightArrow'></i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className='row2part2'> <span>Get a Quote</span></td>

                  <td className='row2part2' id='brands'> <span>Brands</span><i className='downArrow'></i>
                    <div className='brandsDropdown'>
                      <table>
                        <tbody>
                          <tr>
                            <td><img className='brandsDropdownImg' src='https://searchlogovector.com/wp-content/uploads/2018/12/brendan-vacations-logo-vector.png'></img></td>
                            <td><img className='brandsDrowdownImg' src='https://www.costsavertour.com/-/media/Project/Costsaver/costsaver-logo.png'></img></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>

                  <td className='row2part2'> <span>Agents Login</span></td>

                  <td className='row2part2img'> <img id='userAvatar' src='https://huntpng.com/images250/avatar-pic-circle-png-10.png'></img>
                    <span>My Trafalgar<i className='downArrow'></i></span>
                    <div className='myTrafalgarDropdown'>
                      <a href='#'>Log in<i className='rightArrow'></i></a>
                      <a href='#'>Sign up<i className='rightArrow'></i></a>
                      <a href='#'>Manage My Booking<i className='rightArrow'></i></a>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </nav>
        </header>
      </div>
    );
  }
}


/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

class MoreTripDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelDetails: false,
    };
    this.showTravelDetails = this.showTravelDetails.bind(this);
  }

  showTravelDetails() {
    this.setState({
      travelDetails: true,
    });
  }

  render() {
    const divStyle = {
      borderTop: '1px dotted black',
      position: 'relative',
      width: '100%',
      height: '300px',
    };

    const ViewMore = {
      display: 'block',
      cursor: 'pointer',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: '#4a4b4d',
      margin: '0 auto',
      textTransform: 'uppercase',
      borderColor: 'transparent',
      backgroundColor: 'rgba(74,75,77,.1)',
      borderRadius: '25px',
      border: '2px solid #c4082f',
      padding: '12px 20px 10px',
      lineHeight: '22px',
      fontFamily: 'sans-serif',
      zIndex: '2',
    };

    const airportTransfers = {
      textDecoration: 'none',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      color: '#9c1a00',
      textTransform: 'uppercase',
      display: 'block',
      lineHeight: '22px',
      width: '200px',
      fontStyle: 'normal',
      padding: '12px 20px 10px',
      border: '2px solid #c4082f',
      borderRadius: '25px',
      borderColor: '#9c1a00',
      backgroundColor: 'rgba(156,26,0,.2)',
      fontFamily: 'sans-serif',
    };

    // dividing trafalgar difference into two columns
    const difference = this.props.trip.the_trafalgar_difference;
    const midpoint = Math.ceil(difference.length / 2);
    const difference1 = difference.slice(0, midpoint);
    const difference2 = difference.slice(midpoint, difference.length);

    // dividing sightseeing highlights into two columns
    const highlights = this.props.trip.sightseeing_highlights;
    const midpoint2 = Math.ceil(highlights.length / 2);
    const highlights1 = highlights.slice(0, midpoint);
    const highlights2 = highlights.slice(midpoint, highlights.length);

    // dividing travel highlights into two columns
    const travels = this.props.trip.travel_highlights;
    const midpoint3 = Math.ceil(travels.length / 2);
    const travels1 = travels.slice(0, midpoint);
    const travels2 = travels.slice(midpoint, travels.length);

    return (
      <section>
        <div style={divStyle}>
          <h2 style={{
            color: '#4c4c4c',
            font: '24px sans-serif',
            fontWeight: '700',
          }}
          >
Trip details
          </h2>
          <h3 style={{
            font: '19px sans-serif',
            color: '#003b75',
            fontWeight: '700',
            display: 'inline-block',
            marginRight: '200px',
          }}
          >
What's included
          </h3>
          <img style={{ height: '40px', width: '40px', margin: '0 auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Blue_Moon.svg/920px-Blue_Moon.svg.png" alt="moon" />

          <div style={{ display: 'inline-block', marginRight: '100px' }}>
            <h4 style={{
              textTransform: 'uppercase', fontWeight: '600', marginTop: '0px', color: '#4c4c4c',
            }}
            >
              {' '}
              {this.props.trip.nights}
              {' '}
Nights
              {' '}
            </h4>
            <p style={{ color: '#4c4c4c', marginTop: '-20px', fontWeight: '400' }}>Accommodation</p>
          </div>

          <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cutlery.svg/410px-Cutlery.svg.png" alt="cutlery" />
          <div style={{ display: 'inline-block', marginRight: '100px' }}>
            <h4 style={{
              textTransform: 'uppercase', fontWeight: '600', marginTop: '6px', color: '#4c4c4c',
            }}
            >
              {' '}
              {this.props.trip.meals.breakfasts + this.props.trip.meals.lunches + this.props.trip.meals.dinners}
              {' '}
Meals
              {' '}
            </h4>
            <p style={{ color: '#4c4c4c', marginTop: '-20px', fontWeight: '400' }}>
              {this.props.trip.meals.breakfasts}
              {' '}
breakfasts,
              {' '}
              {this.props.trip.meals.lunches}
              {' '}
lunches,
              {' '}
              {this.props.trip.meals.dinners}
              {' '}
dinners
            </p>
          </div>

          <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://www.svgrepo.com/show/138529/route.svg" alt="route" />
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <h4 style={{
              textTransform: 'uppercase', fontWeight: '600', marginTop: '6px', color: '#4c4c4c',
            }}
            >
              {' '}
On-Trip Transport
            </h4>
            <p style={{ color: '#4c4c4c', marginTop: '-20px', fontWeight: '400' }}>All transport shown</p>
          </div>


        </div>

        <div style={divStyle}>
          <h3 style={{
            font: '19px sans-serif',
            fontWeight: '700',
            display: 'block',
            marginRight: '200px',
            color: '#70005d',
          }}
          >
The Trafalgar difference
          </h3>
          <div style={{
            display: 'inline-block', marginTop: 'auto', marginLeft: '350px', marginRight: '100px', height: '50px', width: 'fit-content',
          }}
          >
            {difference1.map((diff, index) => (
              <p
                key={index}
                style={{
                  color: '#4c4c4c', fontWeight: '400', display: 'flex', flexWrap: 'wrap',
                }}
              >
                <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/188px-Map_pin_icon_green.svg.png" alt="route" />
                {diff}
              </p>
            ))}
          </div>
          <div style={{
            display: 'inline-block', marginTop: 'auto', marginRight: '100px', height: '50px', width: 'fit-content',
          }}
          >
            {difference2.map((diff, index) => (
              <p
                key={index}
                style={{
                  color: '#4c4c4c', fontWeight: '400', display: 'flex', flexWrap: 'wrap',
                }}
              >
                <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/188px-Map_pin_icon_green.svg.png" alt="route" />
                {diff}
              </p>
            ))}
          </div>
        </div>

        <div style={divStyle}>
          <h3 style={{
            font: '19px sans-serif',
            color: '#0d5e2f',
            fontWeight: '700',
            display: 'block',
            position: 'relative',
            marginRight: '200px',
          }}
          >
Sightseeing highlights
          </h3>
          <div style={{
            display: 'inline-block', marginLeft: '350px', marginRight: '100px', marginTop: 'auto', height: '50px', width: 'fit-content',
          }}
          >
            {highlights1.map((highlight, index) => (
              <p
                key={index}
                style={{
                  color: '#4c4c4c', fontWeight: '400', display: 'flex', flexWrap: 'wrap',
                }}
              >
                <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/188px-Map_pin_icon_green.svg.png" alt="route" />
                {highlight}
              </p>
            ))}
          </div>
          <div style={{
            display: 'inline-block', marginRight: '100px', marginTop: 'auto', height: '50px', width: 'fit-content',
          }}
          >
            {highlights2.map((highlight, index) => (
              <p
                key={index}
                style={{
                  color: '#4c4c4c', fontWeight: '400', display: 'flex', flexWrap: 'wrap',
                }}
              >
                <img style={{ height: '40px', width: '40px', marginRight: '10px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_pin_icon_green.svg/188px-Map_pin_icon_green.svg.png" alt="route" />
                {highlight}
              </p>
            ))}
          </div>
        </div>
        <button className="BPviewmore" style={ViewMore} onClick={this.showTravelDetails}>View More</button>
        {this.state.travelDetails
          ? (
            <div style={divStyle}>
              <h3 style={{
                font: '19px sans-serif',
                color: '#9c1a00',
                fontWeight: '700',
                display: 'block',
                marginRight: '200px',
              }}
              >
Travel highlights
                <p style={{ color: '#4c4c4c', fontWeight: '400', fontSize: '18px' }}>Specific transfer information can be found here:</p>
                <a style={airportTransfers} href="#" id="BPAirportTransfers">Airport Transfers</a>
              </h3>
              <div style={{
                display: 'inline-block', marginLeft: '350px', marginRight: '100px', marginTop: 'auto', height: '50px', width: 'fit-content',
              }}
              >
                {travels1.map((highlight, index) => (
                  <p key={index} style={{ color: '#4c4c4c', fontWeight: '400' }}>
                    <img style={{ height: '15px', width: '15px', marginRight: '10px' }} src="https://www.jing.fm/clipimg/full/182-1828031_check-dark-red-svg-clip-arts-570-x.png" alt="checkmark" />
                    {highlight}
                  </p>
                ))}
              </div>
              <div style={{
                display: 'inline-block', marginRight: '100px', marginTop: 'auto', height: '50px', width: 'fit-content',
              }}
              >
                {travels2.map((highlight, index) => (
                  <p key={index} style={{ color: '#4c4c4c', fontWeight: '400' }}>
                    <img style={{ height: '15px', width: '15px', marginRight: '10px' }} src="https://www.jing.fm/clipimg/full/182-1828031_check-dark-red-svg-clip-arts-570-x.png" alt="checkmark" />
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

      </section>
    );
  }
}
export default MoreTripDetails;

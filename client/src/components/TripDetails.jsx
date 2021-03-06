/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const TripDetails = (props) => {
  const tripImg = {
    width: '100%',
    height: '500px',
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  const calendar = {
    width: '25px',
    height: '25px',
    position: 'absolute',
    marginTop: '-2px',
  };

  const flag = {
    width: '25px',
    height: '25px',
    position: 'absolute',
    marginTop: '-2px',
  };

  const pointer = {
    width: '25px',
    height: '25px',
    position: 'absolute',
    marginTop: '-2px',
  };

  const tripName = {
    textTransform: 'uppercase',
    marginTop: '60px',
    color: 'rgb(76, 76, 76)',
    font: '24px FuturaNext-DemiBold, sans-serif',
    lineHeight: '30px',
    fontWeight: '700',
  };

  const daysCountriesCitiesDiv = {
    fontWeight: '400px',
    fontFamily: 'opensans,sans-serif',
    fontSize: '15px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '-20px',
    lineHeight: '22px',
    color: '#4c4c4c',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
  };

  const daysCountriesCitiesSpan = {
    marginLeft: '20px',
    marginRight: '20px',
  };

  const firstDescription = {
    color: '#767676',
    textTransform: 'uppercase',
    fontWeight: '800',
    lineHeight: '22px',
    fontHeight: '16px',
    marginBottom: '10px',
    width: '40%',
  };

  const secondDescription = {
    fontWeight: '400px',
    color: '#4c4c4c',
    fontSize: '14px',
    lineHeight: '26px',
    fontFamily: 'opensans, sans-serif',
    width: '40%',
  };

  // check if imageUrl has a space (in city name), and if so add an _ for AWS references

  if (props.trip.imageUrl.includes(' ')) {
    const index = props.trip.imageUrl.indexOf(' ');
    var imageUrl = `${props.trip.imageUrl.slice(0, index)}_${props.trip.imageUrl.slice(index + 1, props.trip.imageUrl.length)}`;
  } else {
    var { imageUrl } = props.trip;
  }

  return (
    <div>
      <div id="BPcityimage"><img  style={tripImg} src={imageUrl} alt={imageUrl.slice(0, -4)} /></div>

      <section id="tripDetails" style={{
        display: 'flex', flexDirection: 'column', width: '93%', margin: 'auto',
      }}
      >
        <h1 id="tripIntro" style={tripName}>{props.trip.name}</h1>
        <div style={daysCountriesCitiesDiv}>
          <span style={daysCountriesCitiesSpan}>
            <img style={calendar} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/calendar.svg.png" alt="calendar" />
          </span>
          <span style={daysCountriesCitiesSpan}>
            <strong>
              {' '}
              {props.trip.days}
            </strong>
            {' '}
            Days
          </span>
          <span style={daysCountriesCitiesSpan} className="BPcountry">
            <img style={flag} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/flag.svg.png" alt="flag" />

            <span style={daysCountriesCitiesSpan} className="BPcountry">
              <strong style={{ marginLeft: '15px' }}>
                {' '}
                1
              </strong>
              {' '}
              Country
              <div className="BPcountryDropdown">
                {props.trip.country}
              </div>
            </span>
          </span>
          <span
            style={{
              marginRight: '20px',
            }}
            className="BPcities"
          >
            <img style={pointer} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/cursor.svg.png" alt="pointer" />
            <span style={daysCountriesCitiesSpan} className="BPcities">
              <strong style={{ marginLeft: '15px' }}>
                {' '}
                {props.trip.cities.length}
              </strong>
              {' '}
              Cities
              <div className="BPcitiesDropdown">
                {props.trip.cities.map((city, index) => (
                  <span key={index}>
                    {`${city}, `}
                  </span>
                ))}
              </div>
            </span>
          </span>
        </div>

        <div>
          <p className="nunito"style={firstDescription}>{props.trip.descriptions[0]}</p>
          <p className="nunito" style={secondDescription}>{props.trip.descriptions[1]}</p>
        </div>
      </section>
    </div>
  );
};

export default TripDetails;

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';


const TripDetails = (props) => {
  const tripImg = {
    width: '100%',
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'block',
  };
  const tripName = {
    textTransform: 'uppercase',
    marginTop: '60px',
    marginLeft: '5px',
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
    marginLeft: '10px',
    lineHeight: '22px',
    color: '#4c4c4c',
    cursor: 'pointer',
  };

  const daysCountriesCitiesSpan = {
    marginLeft: '10px',
    marginRight: '10px',
  };

  return (
    <section>
      <div>
        <img src={require(`../../dist/photos/${props.trip.imageUrl}`)} alt={props.trip.imageUrl.slice(0, -4)} />
        <h1 style={tripName}>{props.trip.name}</h1>
      </div>

      <div style={daysCountriesCitiesDiv}>
        <span style={daysCountriesCitiesSpan}>calendar</span>
        <span style={daysCountriesCitiesSpan}>
          <strong>
            {' '}
            {props.trip.days}
          </strong>
          {' '}
Days
        </span>

        <span style={daysCountriesCitiesSpan} className="country">
flag
          <span style={daysCountriesCitiesSpan} className="country">
            <strong>
              {' '}
            1
            </strong>
            {' '}
Country
            <div className="countryDropdown">
              {props.trip.country}
            </div>
          </span>
        </span>

        <span style={daysCountriesCitiesSpan} className="cities">
pointer
          <span style={daysCountriesCitiesSpan} className="cities">
            <strong>
              {' '}
              {props.trip.cities.length}
            </strong>
            {' '}
Cities
            <div className="citiesDropdown">
              {props.trip.cities.map((city, index) => (
                <span key={index}>
                  {city}
                  <br />
                </span>
              ))}
            </div>
          </span>
        </span>
      </div>
    </section>
  );
};

export default TripDetails;

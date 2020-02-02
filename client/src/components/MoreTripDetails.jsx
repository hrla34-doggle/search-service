/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const MoreTripDetails = (props) => {
  const divStyle = {
    borderTop: '1px dotted black',
    position: 'relative',
    width: '100%',
    height: '250px',
  };
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
        <img style={{height: '40px', width: '40px', marginRight: '10px'}}src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Blue_Moon.svg/920px-Blue_Moon.svg.png' alt="moon"></img>

        <div style={{display: 'inline-block', marginRight: '100px'}}>
       <h4 style={{textTransform: 'uppercase', fontWeight: '600', marginTop: '6px', color: '#4c4c4c'}}> {props.trip.nights} Nights </h4>
       <p style={{color: '#4c4c4c', margin: '4px 0 0', fontWeight: '400'}}>Accomodation</p>
       </div>

       <img style={{height: '40px', width: '40px', marginRight: '10px'}}src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cutlery.svg/410px-Cutlery.svg.png' alt="cutlery"></img>
       <div style={{display: 'inline-block', marginRight: '100px'}}>
       <h4 style={{textTransform: 'uppercase', fontWeight: '600', marginTop: '6px', color: '#4c4c4c'}}> {props.trip.meals.breakfasts + props.trip.meals.lunches + props.trip.meals.dinners} Meals </h4>
    <p style={{color: '#4c4c4c', margin: '4px 0 0', fontWeight: '400'}}>{props.trip.meals.breakfasts} breakfasts, {props.trip.meals.lunches} lunches, {props.trip.meals.dinners} dinners</p>
       </div>
       
       <img style={{height: '40px', width: '40px', marginRight: '10px'}}src='https://www.svgrepo.com/show/138529/route.svg' alt="route"></img>
       <div style={{display: 'inline-block'}}>
       <h4 style={{textTransform: 'uppercase', fontWeight: '600', marginTop: '6px', color: '#4c4c4c'}}> On-Trip Transport </h4>
    <p style={{color: '#4c4c4c', margin: '4px 0 0', fontWeight: '400'}}>All transport shown</p>
       </div>


      </div>

      <div style={divStyle}>
        <h3 style={{
          font: '19px sans-serif',
          color: '#70005d',
          fontWeight: '700',
          display: 'inline-block',
          marginRight: '200px',
        }}
        >
The Trafalgar difference
        </h3>
      </div>

      <div style={divStyle}>
        <h3 style={{
          font: '19px sans-serif',
          color: '#0d5e2f',
          fontWeight: '700',
          display: 'inline-block',
          marginRight: '200px',
        }}
        >
Sightseeing highlights
        </h3>
      </div>

      <div style={divStyle}>
        <h3 style={{
          font: '19px sans-serif',
          color: '#9c1a00',
          fontWeight: '700',
          display: 'inline-block',
          marginRight: '200px',
        }}
        >
Travel highlights
        </h3>
      </div>
    </section>
  );
};


export default MoreTripDetails;


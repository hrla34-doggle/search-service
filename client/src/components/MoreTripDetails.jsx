/* eslint-disable no-shadow */
/* eslint-disable vars-on-top */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
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
      borderTop: '2px solid lightgrey',
      position: 'relative',
      width: '100%',
      height: '250px',
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
      padding: '12px 65px 10px',
      lineHeight: '22px',
      fontFamily: 'sans-serif',
      zIndex: '2',
      borderStyle: 'none'
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
      width: '300px',
      fontStyle: 'normal',
      padding: '12px 20px 10px',
      border: '2px solid #c4082f',
      borderRadius: '25px',
      borderColor: '#9c1a00',
      backgroundColor: 'rgba(156,26,0,.2)',
      fontFamily: 'sans-serif',
    };

    // converting each trafalgar difference item into a tuple that also contains the appropriate image reference
    const difference = this.props.trip.the_trafalgar_difference;
    const diff = difference.map((item) => {
      if (item.includes('CONNECT WITH LOCALS') || item.includes('DIVE INTO CULTURE')) {
        var image = 'https://ebtrafalgar.s3-us-west-1.amazonaws.com/TrafalgarDifference.png';
      } else if (item.includes('LOCAL SPECIALISTS')) {
        var image = 'https://ebtrafalgar.s3-us-west-1.amazonaws.com/LocalSpecialist.png';
      } else if (item.includes('STAYS WITH STORIES')) {
        var image = 'https://ebtrafalgar.s3-us-west-1.amazonaws.com/StayWithStories.png';
      } else if (item.includes('MAKE A DIFFERENCE')) {
        var image = 'https://ebtrafalgar.s3-us-west-1.amazonaws.com/MakeADifference.png';
      }
      return [item, image];
    });
    // now for each tuple's first value (the text), divide that into a tuple with capitalized words and non-capitalized
    const newDiff = diff.map((tuple) => {
      const text = tuple[0];
      const firstPart = [];
      const secondPart = [];
      text.split(' ').forEach((word) => {
        if (word.toUpperCase() === word) {
          firstPart.push(word);
        } else {
          secondPart.push(word);
        }
      });
      return [[firstPart, secondPart], tuple[1]];
    });
    // dividing trafalgar difference into two columns
    const midpoint = Math.ceil(newDiff.length / 2);
    const difference1 = newDiff.slice(0, midpoint);
    const difference2 = newDiff.slice(midpoint, newDiff.length);

    // dividing sightseeing highlights into two columns
    const highlights = this.props.trip.sightseeing_highlights;
    const midpoint2 = Math.ceil(highlights.length / 2);
    const highlights1 = highlights.slice(0, midpoint2);
    const highlights2 = highlights.slice(midpoint2, highlights.length);

    // dividing travel highlights into two columns
    const travels = this.props.trip.travel_highlights;
    const midpoint3 = Math.ceil(travels.length / 2);
    const travels1 = travels.slice(0, midpoint3);
    const travels2 = travels.slice(midpoint3, travels.length);

    // assigning the appropriate image to each trafalgar difference

    return (
      <section id="moreTripDetails"style={{
        display: 'block', flexDirection: 'column', width: '93%', margin: 'auto',
      }}
      >
        <div>
          <h2 style={{
            color: '#4c4c4c',
            font: '32px Nunito Sans',
            fontWeight: '900',
            
          }}
          >
            Trip details
          </h2>
          <div className="BPflexrow" style={{ width: '100%', margin: 'auto', marginTop: '30px' }}>
            <div style={{ height:'200px'}}>
            <h3 style={{
              font: '25px Nunito Sans',
              color: '#003b75',
              fontWeight: '800',
              display: 'inline-block',
              width: '400px',
              float:'left'
              
            
            }}
            >
              What's included
            </h3>
            <div style={{
                height: '125px', width: '280px',  display: "inline-block", float:"left", padding: '15px', margin:'10px 0 10px 0'
              }}>
            <div style={{
                height: '75px', width: '75px', borderRadius: '50%', backgroundColor: '#ecf3fa', display: "inline-block", float:'left'
              }}>
            <img
              style={{
                height: '50px', width: '50px', borderRadius: '0%', marginRight: '10px', backgroundColor: '#add8e6', position: 'relative', top:'20%', left:'15%'
              }}
              src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/Moon.png"
              alt="moon"
            />
            </div>
            <div style={{
                display:'block', height:'100px', width:'150px', float:'left', paddingLeft: '8px'
              }}>
              <h4 style={{
                textTransform: 'uppercase', fontWeight: '800', color: '#4c4c4c', display: "block", float: "left", marginTop: '0'
              }}
              >
                {' '}
                {this.props.trip.nights}
                {' '}
                Nights
                {' '}
              </h4>
              <p style={{ color: '#4c4c4c', marginTop: '-10px', fontWeight: '400', float:"left" }}>Accommodation</p>
            </div>
            </div>
            
              
            <div style={{
                height: '125px', width: '280px',  display: "inline-block", float:"left", padding: '15px', margin:'10px 0 10px 0'
              }}>
            <div style={{
                height: '75px', width: '75px', borderRadius: '50%', backgroundColor: '#ecf3fa', float: 'left'
              }}>
            <img
              style={{
                height: '50px', width: '40px', marginRight: '10px', borderRadius: '0%', backgroundColor: '#add8e6', margin:'0', position:'relative', top:'20%', left: '25%'
              }}
              src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/Food.png"
              alt="cutlery"
            />
            </div>
            
            <div style={{
                display:'block', height:'100px', width:'150px', float:'left', paddingLeft: '6px'
              }}>
              <h4 style={{
                textTransform: 'uppercase', fontWeight: '800', color: '#4c4c4c', marginTop: '0', 
              }}
              >
                {' '}
                {this.props.trip.meals.breakfasts + this.props.trip.meals.lunches + this.props.trip.meals.dinners}
                {' '}
                Meals
                {' '}
              </h4>
              <p style={{ color: '#4c4c4c', marginTop: '-10px', fontWeight: '400' }}>
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
            </div>
            <div style={{
                height: '125px', width: '280px',  display: "inline-block", float:"left", padding: '15px', margin:'10px 0 10px 0'
              }}>
            <div style={{
                height: '75px', width: '75px', borderRadius: '50%', backgroundColor: '#ecf3fa', float: 'left'
              }}>
            <img
              style={{
                height: '40px', width: '40px', marginRight: '10px', borderRadius: '0%', backgroundColor: '#add8e6', position:'relative', top:'25%', left:'25%'
              }}
              src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/Path.png"
              alt="cutlery"
            />
            </div>
            <div style={{display:'block', height:'100px', width:'180px', float:'left',paddingLeft: '6px'}}>
              <h4 style={{
                textTransform: 'uppercase', fontWeight: '800', color: '#4c4c4c', marginTop: '0', 
              }}
              >
                {' '}
                On-Trip Transport
              </h4>
              <p style={{ color: '#4c4c4c', marginTop: '-10px', fontWeight: '400' }}>All transport shown</p>
            </div>
          </div>
          </div>
          </div>

        </div>
        <div style={{borderTop: '2px solid lightgrey',
                     position: 'relative',
                     width: '100%',
                     height: 'content-fit',
                     float:'left',
                     padding: '30px 0 30px 0',
                     }}>
          <div className="BPflexrow" style={{ width: '90%', height:'fit-content' }}>
            <h3 style={{
              font: '25px Nunito Sans',
              fontWeight: '800',
              display: 'inline-block',
              width: '400px',
              float:'left',
              color: '#70005d',
            }}
            >
              The Trafalgar difference
            </h3>
            <div style={{
              display: 'inline-block', height: 'content', width:'350px', padding: '15px', margin:'10px 0 10px 0', float:'left'
            }}
            >
              {difference1.map((diff, index) => (
                <div
                  key={index}
                  style={{
                    color: '#4c4c4c', fontWeight: '400', display: 'block', width: '100%', float: 'left', padding:'10px 0 10px 0'
                  }}
                >
                  <div style={{
                      height: '75px', width: '75px', borderRadius: '50%', backgroundColor: '#fcebf9', float:'left' 
                    }}>
                  <img
                    style={{
                      height: '40px', width: '40px', borderRadius: '0%', backgroundColor: '#fcebf9', float:'left', position:'relative', top:'25%', left:'23%'
                    }}
                    src={diff[1]}
                    alt={diff[1].slice(-8)}
                  />
                  </div>
                  <div style={{ float:'left', display:'block', width:'200px', paddingLeft:'6px'  }}>
                    <span style={{ fontWeight: 'bold',   }}>{diff[0][0].join(' ')}</span>
                    <br />
                    <div style={{width:'200px'  }}>{diff[0][1].join(' ')}</div>
                    
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              display: 'inline-block', height: 'content', width:'350px', padding: '15px', margin:'10px 0 10px 0', float:'left'
            }}
            >
              {difference2.map((diff, index) => (
                <div style={{
                  color: '#4c4c4c', fontWeight: '400', display: 'block', width: '400px', float:'left', height:'auto', padding:'10px 0 10px 0'
                }}>
                <div
                  key={index}
                  style={{
                    height: '75px', width: '75px', borderRadius: '50%', backgroundColor: '#fcebf9', float:'left'
                  }}
                >
                  <img
                    style={{
                      height: '40px', width: '40px', borderRadius: '0%', backgroundColor: '#fcebf9', float:'left', position:'relative', top:'23%', left:'23%'
                    }}
                    src={diff[1]}
                    alt={diff[1].slice(-8)}
                  />
                  
                </div>
                <div>
                    <span style={{ fontWeight: 'bold',paddingLeft:'6px',   }}>{diff[0][0].join(' ')}</span>
                    <br />
                    <span style={{ paddingLeft:'6px', display:'block',  }}>{diff[0][1].join(' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{borderTop: '2px solid lightgrey',
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      float:'left',
      padding: '50px 0 5px 0',
      }}>
          <div className="BPflexrow" style={{ width: '90%' }}>
            <h3 style={{
              font: '25px Nunito Sans',
              color: '#0d5e2f',
              fontWeight: '800',
              display: 'block',
              width: "415px",
              float: 'left',
              margin: '0'
              
            }}
            >
              Sightseeing highlights
            </h3>
            <div style={{
              display: 'block', height: '200px', float: 'left', width:'400px'
            }}
            >
              {highlights1.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    height: '100px', width: '400px', float:'left'
                  }}
                >
                  <div style={{
                    height: '45px', width: '45px', borderRadius: '50%', backgroundColor: '#e6ffe6', float:'left', paddingRight: '6px'
                  }}>
                  <img
                    style={{
                      height: '35px', width: '28px', marginRight: '10px', borderRadius: '50%', backgroundColor: '#90EE90', position: 'relative', top: '15%', left:'20%'
                    }}
                    src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/Highlights.png"
                    alt="route"
                  />
                  </div>
                  <div style={{
                      float:'left', width:'300px', paddingLeft:'6px'
                    }}>{highlight}</div>
                </div>
              ))}
            </div>
            <div style={{
              display: 'inline-block', height: '50px', width:'300px'
            }}
            >
              {highlights2.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    height: '100px', width: '400px', float:'left', 
                  }}
                >
                  <div style={{
                    height: '45px', width: '45px', borderRadius: '50%', backgroundColor: '#e6ffe6', float:'left' 
                  }}>
                  <img
                    style={{
                      height: '35px', width: '28px', marginRight: '10px', borderRadius: '50%', backgroundColor: '#90EE90', position: 'relative', top: '15%', left:'20%'
                    }}
                    src="https://ebtrafalgar.s3-us-west-1.amazonaws.com/Highlights.png"
                    alt="route"
                  />
                  </div>
                  <div style={{
                      float:'left', width:'300px', paddingLeft:'6px'
                    }}>{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {this.state.travelDetails ? null : <button className="BPviewmore" style={ViewMore} onClick={this.showTravelDetails}>View More</button> }
        {this.state.travelDetails
          ? (
            <div id="edgarwashere" style={{borderTop: '2px solid lightgrey',
            position: 'relative',
            width: '100%',
            height: '250px',
            float: 'left',
            height:'fit-content',
            padding: '30px 0 45px 0',
      
            
            }}>
              <div className="BPflexrow" style={{ height:'fit-content',width: '90%',padding: '15px, 0 25px 0'}}>
                <h3 style={{
                  font: '25px Nunito Sans',
                  color: '#9c1a00',
                  fontWeight: '800',
                  display: 'inline-block',
                  width:'430px',
                  margin: '0',
                  float:'left'
                  
                }}
                >
                  Travel highlights
                  <p style={{
                    color: '#4c4c4c', fontWeight: '400', fontSize: '18px', width: '90%',
                  }}
                  >
                    Specific transfer information can be found here:
                  </p>
                  <a style={airportTransfers} id="BPAirportTransfers">Airport Transfers</a>
                </h3>


                <div style={{
                  display: 'block',float:'left' , width: '380px',
                }}
                >
                  {travels1.map((highlight, index) => (
                    <p key={index} style={{ color: '#4c4c4c', fontWeight: '400', width: '100%' }}>
                      
                      <div style={{float:'left', width:'100%',padding:'15px 0 15px 0'}}><div style={{display:'block', float:'left', }}><img style={{ height: '15px', width: '15px', float:'left', marginRight: '10px' }} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/checkmark.svg.png" alt="checkmark" /></div><div style={{float:'left', width:'350px'}}>{highlight}</div></div>
                    </p>
                  ))}
                </div>

                <div style={{ display: 'block', float:'left' , width: '380px', }}>
                  {travels2.map((highlight, index) => (
                    <p key={index} style={{ color: '#4c4c4c', fontWeight: '400', width: '100%' }}>
                      
                      <div style={{float:'left', width:'100%',padding:'15px 0 15px 0'}}><div style={{display:'block', float:'left', }}><img style={{ height: '15px', width: '15px', float:'left', marginRight: '10px' }} src="https://front-end-capstone-trafalgar.s3-us-west-1.amazonaws.com/checkmark.svg.png" alt="checkmark" /></div><div style={{float:'left', width:'350px'}}>{highlight}</div></div>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

      </section>
    );
  }
}
export default MoreTripDetails;

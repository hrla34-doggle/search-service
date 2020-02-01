/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Search = (props) => {
  const barStyle = {
    fontSize: '16px',
    fontFamily: 'opensans,sans-serif',
    fontWeight: '400',
    width: '600px',
    paddingLeft: '16px',
    boxSizing: 'border-box',
    height: '44px',
    border: '1px solid #d6d6d6',
    boxShadow: '0 4px 4px -4px #767676',
    background: '#fff',
  };
  const imgStyle = {
    height: '44px',
    width: '44px',
    border: '1px solid gray',
    display: 'inline',
  };
  const resultsStyle = {
    border: '1px',
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <input id="searchBar" style={barStyle} type="text" placeholder="Where to or what trip?" onChange={(e) => props.updateQuery(e)} />
        <img id="magnifyingGlass" style={imgStyle} src="https://cdn1.iconfinder.com/data/icons/utility/100/SVG_Utility-07-512.png" alt="magnifying glass" />
      </div>
      {props.searchResults.map((result) => <div className="searchResults" onClick={() => props.getOneTrip(result[1])} style={resultsStyle} key={result[1]}>{result[0]}</div>)}
    </div>
  );
};

export default Search;

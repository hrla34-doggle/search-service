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
  return (
    <div>
      <input style={barStyle} type="text" placeholder="Where to or what trip?" />
    </div>
  );
};

export default Search;

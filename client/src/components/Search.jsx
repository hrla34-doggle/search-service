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
    marginBottom: '10px',
    border: '1px solid #d6d6d6',
    boxShadow: '0 4px 4px -4px #767676',
    background: '#fff',
  };
  const imgStyle = {
    height: '44px',
    width: '44px',
    border: '1px solid gray',
    display: 'inline-block',
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {' '}
              <input id="searchBar" style={barStyle} type="text" placeholder="Where to or what trip?" />
            </td>
            <td><img id="magnifyingGlass" style={imgStyle} src="https://cdn1.iconfinder.com/data/icons/utility/100/SVG_Utility-07-512.png" alt="magnifying glass" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Search;

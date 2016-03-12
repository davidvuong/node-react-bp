'use strict';
import React from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends React.Component {
  render() {
    return <div className='navigation'>
      <ul>
        <li><IndexLink to="/">index (home)</IndexLink></li>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/detail">detail</Link></li>
      </ul>
    </div>;
  }
}
export default Navigation;

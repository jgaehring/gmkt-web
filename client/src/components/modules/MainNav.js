import React from 'react';
import {Link} from 'react-router-dom';
import './MainNav.css'

export default function Nav(props) {
  return (
    <nav className={(props.className) ? props.className + " MainNav" : "MainNav"}>
      <ul className="nav-left">
        <li><a href="http://www.grownyc.org">GrowNYC.org</a></li>
      </ul>
      <ul className="nav-right">
        <li>
          <Link to='/today'>Today</Link>
        </li>
        <li>
          <Link to='/producers'>Producers</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/maps'>Maps</Link>
        </li>
      </ul>
    </nav>
  )
}

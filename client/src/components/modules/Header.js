import React from 'react';
import MainNav from 'modules/MainNav';
import './Header.css';

function Header(props) {
  return (
    <div>
      <MainNav className="sticky-nav" />
      <div className="hero">
        <MainNav />
        {props.children}
      </div>

    </div>

  )
}

export default Header;

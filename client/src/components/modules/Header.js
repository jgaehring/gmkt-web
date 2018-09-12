import React from 'react';
import MainNav from 'modules/MainNav';
import Section from './Section';
import './Header.css';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function Header(props) {
  return (
    <div>
      <MainNav className="sticky-nav" />
      <div className="hero">
        <MainNav />
        <Section className="header-section">
          {props.children}
        </Section>
      </div>

    </div>

  )
}

export function HeaderImage({ imgURL, alt }) {
  return (
    <div className="header-image">
      <img src={imgURL} alt={alt}/>
    </div>
  )
}

export function HeaderInfo(props) {
  return (
    <div className="header-info">
      {props.children}
    </div>
  )
}

export function MainInfo(props) {
  return (
    <div className="main-info">
      <img className="logo" src={logo} alt="logo" />
      {props.children}
    </div>
  )
}

export function Details(props) {
  return (
    <div className="profile-details">
      {props.children}
    </div>
  )
}

export function DetailRow(props) {
  return (
    <div className="detail-row">
      {props.children}
    </div>
  )
}

export default Header;

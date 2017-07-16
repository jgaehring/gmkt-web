import React from 'react';
import Moment from 'react-moment';
import Section from 'modules/Section';
import Nav from 'modules/Nav';
import './TodayHeader.css';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function TodayHeader(props) {
  return (
    <div>
      <Nav className="sticky-nav">
        <ul className="nav-left">
          <li><a href="http://www.grownyc.org">GrowNYC.org</a></li>
        </ul>
        <ul className="nav-right">
          <li><a href="#Seasonal-List">Seasonal</a></li>
          <li><a href="#Attendance">Producers</a></li>
          <li><a href="#Map">Map</a></li>
        </ul>
      </Nav>
      <div className="hero">
        <Nav>
          <ul className="nav-left">
            <li><a href="http://www.grownyc.org">GrowNYC.org</a></li>
          </ul>
          <ul className="nav-right">
            <li><a href="#Seasonal-List">Seasonal</a></li>
            <li><a href="#Attendance">Producers</a></li>
            <li><a href="#Map">Map</a></li>
          </ul>
        </Nav>
        <Section className="Today-Header">
          <figure>
            <img className="logo" src={logo} alt="GrowNYC Logo"/>
          </figure>
          {
            (props.marketToday) ?
            <h1>Today's Greenmarket<br/>at Union Square</h1> :
              <h1>
                The next market will be on&nbsp;
                <Moment date={props.date} format={'dddd, MMMM Do'} />
              </h1>
            }
            <p>Union Square Greenmarket, New York<br/>
            Open year-round, 8 am - 6 pm, Mon/Wed/Fri/Sat</p>
          </Section>
        </div>

    </div>

  )
}

export default TodayHeader;

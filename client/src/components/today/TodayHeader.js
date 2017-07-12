import React from 'react';
import Moment from 'react-moment';
import Section from 'modules/Section'
import './TodayHeader.css';
import logo from 'media/GrowNYC-Circle-large-2065px.png'

function TodayHeader(props) {
  return (
    <div className="hero">
      <Section className="Today-Header">
        <figure>
          <img className="logo" src={logo} alt="GrowNYC Logo"/>
        </figure>
        {
          (props.marketToday) ?
          <h1>Today's Greenmarket<br/>at Union Square</h1> :
          <h1>
            The next market will be on&nbsp;<br/>
            <Moment date={props.date} format={'dddd, MMMM Do'} />
          </h1>
        }
        <input type="text" placeholder="Find your favorite farmer..."></input>
      </Section>
    </div>

  )
}

export default TodayHeader;

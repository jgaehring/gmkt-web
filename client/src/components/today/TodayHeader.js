import React from 'react';
import Moment from 'react-moment';
import Section from 'modules/Section';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function TodayHeader(props) {
  return (
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
  )
}

export default TodayHeader;

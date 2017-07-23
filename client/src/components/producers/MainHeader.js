import React from 'react';
import Section from 'modules/Section';
import Header from 'modules/Header';
// import './TodayHeader.css';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function MainHeader(props) {
  return (
    <Header>
      <Section className="Today-Header">
        <figure>
          <img className="logo" src={logo} alt="GrowNYC Logo"/>
        </figure>
        <h1>Union Square Producers</h1>
        <p>Greenmarket is a producer-only market with rigorous “grow-your-own” standards. Why is that important? Because selling directly to customers means farmers, fishers and their children can keep doing what they love and feeding growing cities. It also means you get to know who grows your food.</p>
        <p>Greenmarket's farmers and fishers come from broad a section of the Northeast, including parts of New Jersey, Pennsylvania, New York and New England, providing New Yorkers with a bountiful and astoundingly diverse array of fresh foods.</p>

      </Section>
    </Header>
  )
}

export default MainHeader;

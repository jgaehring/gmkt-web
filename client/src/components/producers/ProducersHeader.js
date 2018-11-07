import React from 'react';
import Section from 'modules/Section';
import Header from 'modules/Header';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function ProducersHeader(props) {
  return (
    <Header>
      <Section className="Producers-Header">
        <figure>
          <img className="logo" src={logo} alt="GrowNYC Logo"/>
        </figure>
        <h1>Union Square Greenmarket Producers</h1>
        <p>Greenmarket is a producer-only market with rigorous “grow-your-own” standards. Producers come from broad a section of the Northeast, including parts of New Jersey, Pennsylvania, New York and New England, providing New Yorkers with a bountiful and astoundingly diverse array of fresh foods.</p>

      </Section>
    </Header>
  )
}

export default ProducersHeader;

import React from 'react';
import Section from 'modules/Section';
import Header from 'modules/Header';
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function ProductsHeader(props) {
  return (
    <Header>
      <Section className="Producers-Header">
        <figure>
          <img className="logo" src={logo} alt="GrowNYC Logo"/>
        </figure>
        <h1>Browse Products</h1>
      </Section>
    </Header>
  )
}

export default ProductsHeader;

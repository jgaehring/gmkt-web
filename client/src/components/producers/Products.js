import React from 'react';
import Section from 'modules/Section';

function Products(props) {
  return (
    <Section>
      {
        props.products.map( product => {
          return <p>{product.name}</p>
        })
      }
    </Section>
  )
}

export default Products;

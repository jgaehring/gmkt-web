import React from 'react';
import {Link} from 'react-router-dom';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon.js';

function ProductRow(props) {
  const icon = getTypeIcon(props.product.type);
  return (
    <Link to={"/products/" + props.product.id} className="Producer-Row">
      <div className="icon">
        <img src={icon} alt="type" />
      </div>
      <div className="name">
        <p>{props.product.name}</p>
      </div>
    </Link>
  )
}

function Products(props) {
  return (
    <Section>
      <div className="Producer-Line heading">
        <div className="icon">
          <p>Type</p>
        </div>
        <div className="name">
          <p>Name</p>
        </div>
      </div>
      {
        props.products.map( product => {
          return (
            <ProductRow product={product} key={product.id} />
          )
        })
      }
    </Section>
  )
}

export default Products;

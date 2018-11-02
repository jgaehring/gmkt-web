import React from 'react';
import Header, {
  HeaderImage,
  HeaderInfo,
  // MainInfo,
  Details,
  DetailRow,
} from 'modules/Header';
import parseProductType from 'utils/parseProductType.js';
import './ProductsHeader.css'

import logo from 'media/GrowNYC-Circle-large-2065px.png';

function ProductsHeader({ selection, selectType }) {
  // Create an array with a range of numbers, 0 - 8, then
  // map those numers to their corresponding product types
  const categories = [...(new Array(9).keys())]
    .map(num => parseProductType(num));
  const isSelected = index => (
    selection === index ? "selected" : ""
  )
  return (
    <Header id="Products-Header">
      <HeaderImage
        imgURL={logo}
        alt="GrowNYC Logo"
        className="big-logo"
      />
      <HeaderInfo>
        <div className="main-info">
          <h1>Current Products</h1>
          <p>Browse by Category</p>
        </div>
        <Details>
          {
            categories.map((type, index) => (
              <DetailRow
                key={index}
                className={isSelected(index)}
                onClick={() => selectType(index)}
              >
                <img
                  className="small-type-icon"
                  src={type.icon}
                  alt="type"
                />
                <h3>&nbsp;{type.name}</h3>
              </DetailRow>
            ))
          }
        </Details>
      </HeaderInfo>
    </Header>
  )
}

export default ProductsHeader;

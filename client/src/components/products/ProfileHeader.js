import React from 'react';
import {Link} from 'react-router-dom';
import Header, {
  HeaderImage,
  HeaderInfo,
  MainInfo,
  Details,
  DetailRow,
} from 'modules/Header';
import parseProductType from 'utils/parseProductType.js';
import parseMonth from 'utils/parseMonth';

function getProductImage(pic, type) {
  if (pic === undefined) {
    return parseProductType(type).icon;
  } else {
    return pic;
  }
}

function ProfileHeader({ product, parentProduct }) {
  const pic = product.pic_url;
  const type = product.type;
  const imgURL = getProductImage(pic, type);
  const season = 
    (product.season_from && product.season_to)
    ? (<DetailRow>
      <h4>In Season</h4>
      <p>
        {
          `${parseMonth(product.season_from).name} to `
          + `${parseMonth(product.season_to).name}`
        }
      </p>
    </DetailRow>)
    : null;
  const varietyOf = 
    (parentProduct)
    ? (<DetailRow>
      <h4>Variety of</h4>
      <Link to={`/products/${parentProduct.id}`}>
        <p>{parentProduct.name}</p>
      </Link>
    </DetailRow>)
    : null;
  return (
    <Header>
      <HeaderImage imgURL={imgURL}  alt="Product"/>
      <HeaderInfo>
        <MainInfo>
          <h1>{product.name}</h1>
        </MainInfo>
        <Details>
          <DetailRow>
            <h4>Product Type</h4>
            <p>
              <img 
                className="small-type-icon" 
                src={parseProductType(product.type).icon} 
                alt="type" 
              />
              &nbsp;
              {parseProductType(product.type).name}
            </p>
          </DetailRow>
          {season}
          {varietyOf}
        </Details>
      </HeaderInfo>
    </Header>
  )
};

export default ProfileHeader;

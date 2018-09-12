import React from 'react';
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

function ProfileHeader({ product }) {
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
            <img 
              className="small-type-icon" 
              src={parseProductType(product.type).icon} 
              alt="type" 
            />
            <p>{parseProductType(product.type).name}</p>
          </DetailRow>
          {season}
        </Details>
      </HeaderInfo>
    </Header>
  )
};

export default ProfileHeader;

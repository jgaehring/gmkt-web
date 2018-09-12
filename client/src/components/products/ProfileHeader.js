import React from 'react';
import Header, {
  HeaderImage,
  HeaderInfo,
  MainInfo,
  Details,
  DetailRow,
} from 'modules/Header';
import getTypeIcon from 'media/product-types/getTypeIcon.js';

function getProductImage(pic, type) {
  if (pic === undefined) {
    return getTypeIcon(type);
  } else {
    return pic;
  }
}

function ProfileHeader({ product }) {
  const pic = product.pic_url;
  const type = product.type;
  const imgURL = getProductImage(pic, type);
  return (
    <Header>
      <HeaderImage imgURL={imgURL}  alt="Product"/>
      <HeaderInfo>
        <MainInfo>
          <h2>{product.name}</h2>
        </MainInfo>
        <Details>
          <DetailRow><p>Some details about{product.name}</p></DetailRow>
        </Details>
      </HeaderInfo>
    </Header>
  )
};

export default ProfileHeader;

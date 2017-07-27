import React from 'react';
import Header from 'modules/Header';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon.js';

function getProductImage(pic, type) {
  if (pic === undefined) {
    return getTypeIcon(type);
  } else {
    return pic;
  }
}

function ProfileHeader(props) {
  const pic = props.product.pic_url;
  const type = props.product.main_type;
  const imgURL = getProductImage(pic, type);
  return (
    <Header>
      <Section>
        <h1>{props.product.name}</h1>
        <img src={imgURL} alt="Product" />
      </Section>
    </Header>
  )
};

export default ProfileHeader;

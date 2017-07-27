import React from 'react';
import Header from 'modules/Header';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon.js';

function getProducerImage(pic, type) {
  if (pic === undefined) {
    return getTypeIcon(type);
  } else {
    return pic;
  }
}

function ProfileHeader(props) {
  const pic = props.producer.pic_url;
  const type = props.producer.main_type;
  const imgURL = getProducerImage(pic, type);
  return (
    <Header>
      <Section>
        <h1>{props.producer.name}</h1>
        <img src={imgURL} alt="Producer" />
      </Section>
    </Header>
  )
};

export default ProfileHeader;

import React from 'react';
import LazyLoad from 'react-lazyload';
import Thumbnail from 'modules/Thumbnail';
import getTypeIcon from 'media/product-types/getTypeIcon.js';
import "today/Producer.css"

function getProducerImage(pic, type) {
  if (pic === undefined) {
    return getTypeIcon(type);
  } else {
    return pic;
  }
}

function Producer(props) {
  const pic = props.producer.pic_url;
  const type = props.producer.main_type;
  const imgURL = getProducerImage(pic, type);
  return (
    <div className="Producer">
      <LazyLoad height={"20vw"} offset={500} once>
        <Thumbnail
            imgURL={imgURL}
            altText={props.producer.name}
            thumbnailText={props.producer.name}
          />
      </LazyLoad>
    </div>
  )
};

export default Producer;

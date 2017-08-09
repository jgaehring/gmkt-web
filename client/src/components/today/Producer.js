import React from 'react';
import {Link} from 'react-router-dom';
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
    <Link to={"/producers/" + props.producer.id} className="Producer">
      <LazyLoad height={"20vw"} offset={500} once>
        <Thumbnail
            imgURL={imgURL}
            altText={props.producer.name}
            thumbnailText={props.producer.name}
          />
      </LazyLoad>
    </Link>
  )
};

export default Producer;

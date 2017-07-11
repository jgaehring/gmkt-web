import React from 'react';
import LazyLoad from 'react-lazyload';
import Thumbnail from 'modules/Thumbnail';
import "today/Producer.css"

function Producer(props) {
  return (
    <div className="Producer">
      <LazyLoad height={"20vw"} offset={500} once>
        <Thumbnail
            imgURL={props.producer.pic_url}
            altText={props.producer.name}
            thumbnailText={props.producer.name}
          />
      </LazyLoad>
    </div>
  )
};

export default Producer;

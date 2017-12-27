import React from 'react';
import Section from 'modules/Section'
import 'today/Producers.css'
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Thumbnail from 'modules/Thumbnail';
import getTypeIcon from 'media/product-types/getTypeIcon.js';

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

function Producers(props) {
  if (props.producers.length > 0) {
    return (
      <Section className="Todays-Producers">
        <h2>{props.headingText}</h2>
        {
          props.producers.map(producer => <Producer
              producer={producer}
              key={producer.id} />)
        }
      </Section>
    )
  } else {
    return null;
  }
};

export default Producers;

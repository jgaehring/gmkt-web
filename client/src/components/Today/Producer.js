import React from 'react';
import LazyLoad from 'react-lazyload';

function Producer(props) {
  return (
    <div className="producer">
      <LazyLoad height={"20vw"} offset={500} once>
        <img src={props.producer.pic_url} alt={props.producer.name}/>
      </LazyLoad>
      <p>{props.producer.name}</p>
    </div>
  )
};

export default Producer;
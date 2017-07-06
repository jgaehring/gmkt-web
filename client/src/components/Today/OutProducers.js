import React from 'react';
import LazyLoad from 'react-lazyload';

function OutProducers(props) {

  let outProducersHeading = null;
  if (props.outProducers.length > 0) {
      outProducersHeading = <h2>Producers Out Today</h2>
  };

  let outProducersBody = null;
  if (props.outProducers.length > 0) {
    outProducersBody = props.outProducers.map( (producer) => {
      return (
        <div className="producer" key={producer.id}>
        <LazyLoad height={"20vw"} offset={500} once>
        <img src={producer.pic_url} alt={producer.name}/>
        </LazyLoad>
        <p>{producer.name}</p>
        </div>
      )
    })
  };

  return (
    <div>
      {outProducersHeading}
      {outProducersBody}
    </div>
  );
};

export default OutProducers;

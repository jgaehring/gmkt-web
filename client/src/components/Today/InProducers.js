import React from 'react';
import LazyLoad from 'react-lazyload';

function InProducers(props) {

  let inProducersHeading = null;
  if (props.inProducers.length > 0) {
    inProducersHeading = <h2>Producers in Attendance Today</h2>
  };

  let inProducersBody = null;
  if (props.inProducers.length > 0) {
    inProducersBody = props.inProducers.map( (producer) => {
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
        {inProducersHeading}
        {inProducersBody}
      </div>
  )
};

export default InProducers;

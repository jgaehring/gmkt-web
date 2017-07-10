import React from 'react';
import Producer from './Producer';
import './Producers.css';

function Producers(props) {

  const ProducersHeading =
    (props.producers.length > 0) ?
    <h2>{props.headingText}</h2> :
    null;

  const ProducersBody =
    (props.producers.length > 0) ?
    props.producers.map(producer => <Producer
        producer={producer}
        key={producer.id} />) :
    null;

  return (
    <div>
      {ProducersHeading}
      {ProducersBody}
    </div>
  )
};

export default Producers;

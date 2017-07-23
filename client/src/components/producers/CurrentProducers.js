import React from 'react';
import Section from 'modules/Section';

function ProducerLine(props) {
  return (
    <p>{props.producer.name}</p>
  )
}

function CurrentProducers(props) {
  return (
    <Section>
      <h2>Hello</h2>
      {
        props.currentProducers.map(producer => {
          return (
            <ProducerLine key={producer.id} producer={producer}/>
          )
        })
      }
    </Section>
  )
};

export default CurrentProducers;

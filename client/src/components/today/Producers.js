import React from 'react';
import Producer from 'today/Producer';
import Section from 'modules/Section'
import './Producers.css'

function Producers(props) {

  if (props.producers.length > 0) {
    return (
      <Section className="Producer-List">
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

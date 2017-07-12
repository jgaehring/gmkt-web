import React from 'react';
import Producer from 'today/Producer';
import Section from 'modules/Section'


function Producers(props) {

  if (props.producers.length > 0) {
    return (
      <Section>
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

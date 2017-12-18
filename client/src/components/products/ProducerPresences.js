import React from 'react';
import Section from 'modules/Section'

function ProducerRow(props) {
  return <p>{props.name + " on " + props.date}</p>
}

function ProducerPresences(props) {
  return (
    <Section>
      {
        props.presences.map( presence =>
          <ProducerRow
            key={ presence.producer_id + "_" + presence.date }
            date={presence.date}
            name={presence.producerInfo.name}
            type={presence.producerInfo.main_type} />
        )
      }
    </Section>
  )
}

export default ProducerPresences;

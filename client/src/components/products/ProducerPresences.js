import React from 'react';
import Section from 'modules/Section'

// Renders a list of all producers who have sold the product in the last week
export default function ProducerPresences(props) {
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

function ProducerRow(props) {
  return <p>{props.name + " on " + props.date}</p>
}

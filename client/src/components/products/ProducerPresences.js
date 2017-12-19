import React from 'react';
import Section from 'modules/Section';
import {ProducerRow, RowIcon, RowName, RowDate} from 'modules/ProducerRows'

// Renders a list of all producers who have sold the product in the last week
export default function ProducerPresences(props) {
  const cutKeys = (p) => p.producer_id + "_" + p.date;
  return (
    <Section>
      {
        props.presences.map( p =>
          <ProducerRow key={cutKeys(p)} id={p.producer_id} >
            <RowIcon type={p.producerInfo.main_type} />
            <RowName name={p.producerInfo.name} />
            <RowDate date={p.date} />
          </ProducerRow>
        )
      }
    </Section>
  )
}

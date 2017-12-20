import React from 'react';
import Section from 'modules/Section';
import {
  ProducerList,
  ListHeading,
  ProducerRow,
  RowIcon,
  RowName,
  RowSummary } from 'modules/ProducerList';
import ProducerDays from 'producers/ProducerDays';

export default function AllProducersList(props) {
  return (
    <Section>
      <ProducerList>
        <ListHeading
          colHeadings={["TYPE", "NAME", "SUMMARY", "DAYS"]} />
        {
          props.currentProducers.map( p =>
            <ProducerRow key={p.id} id={p.id}>
              <RowIcon type={p.main_type} />
              <RowName name={p.name} />
              <RowSummary summary={p.product_summary} maxLength={40} />
              <ProducerDays seasons={p.seasons} addGaps />
            </ProducerRow>
          )
        }
      </ProducerList>
    </Section>
  )
}

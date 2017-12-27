import React from 'react';
import Section from 'modules/Section';
import {
  List,
  ListHeading,
  Row,
  RowIcon,
  RowName,
  RowSummary } from 'modules/ProducerList';
import ProducerDays from 'producers/ProducerDays';

export default function AllProducersList(props) {
  return (
    <Section>
      <List>
        <ListHeading
          colHeadings={["TYPE", "NAME", "SUMMARY", "DAYS"]} />
        {
          props.currentProducers.map( p =>
            <Row key={p.id} to={"/producers/" + p.id}>
              <RowIcon type={p.main_type} />
              <RowName name={p.name} />
              <RowSummary summary={p.product_summary} maxLength={40} />
              <ProducerDays seasons={p.seasons} addGaps />
            </Row>
          )
        }
      </List>
    </Section>
  )
}

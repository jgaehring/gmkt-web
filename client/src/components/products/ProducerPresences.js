import React from 'react';
import Section from 'modules/Section';
import {
  List,
  ListHeading,
  Row,
  RowIcon,
  RowName,
  RowDate } from 'modules/List'

// Renders a list of all producers who have sold the product in the last week
export default function ProducerPresences(props) {
  const cutKeys = (p) => p.producer_id + "_" + p.date;
  return (
    <Section>
      <List>
        <ListHeading
          heading={"Recently Sold By"}
          colHeadings={["TYPE", "NAME", "DATE"]} />
        {
          props.presences.map( p =>
            <Row key={cutKeys(p)} to={"/producers/" + p.producer_id} >
              <RowIcon type={p.producerInfo.main_type} />
              <RowName name={p.producerInfo.name} />
              <RowDate date={p.date} />
            </Row>
          )
        }
      </List>
    </Section>
  )
}

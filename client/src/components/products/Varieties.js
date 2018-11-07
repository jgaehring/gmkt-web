import React from 'react';
import Section from 'modules/Section';
import {
  List,
  ListHeading,
  Row,
  RowIcon,
  RowName,
} from 'modules/List'

// Renders a list of all producers who have sold the product in the last week
export default function Varieties({ name, varieties }) {
  return (
    <Section>
      <List>
        <ListHeading
          heading={"Varieties of " + name}
          colHeadings={["TYPE", "NAME"]} />
        {
          (varieties !== undefined)
            ? varieties.map( v =>
              <Row key={v.id} to={"/products/" + v.id} >
                <RowIcon type={v.type} />
                <RowName name={v.name} />
              </Row>
            )
            : null
        }
      </List>
    </Section>
  )
}

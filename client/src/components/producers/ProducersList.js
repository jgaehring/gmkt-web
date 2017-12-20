import React from 'react';
import Section from 'modules/Section';
import {
  ProducerRow,
  RowIcon,
  RowName,
  RowSummary } from 'modules/ProducerRows';
import ProducerDays from 'producers/ProducerDays';

export default function ProducersList(props) {
  return (
    <Section>
      <div className="Producer-List">
        <div className="Producer-Row heading">
          <div className="icon">
            <p>Type</p>
          </div>
          <div className="name">
            <p>Name</p>
          </div>
          <div className="summary">
            <p>Product Summary</p>
          </div>
          <div className="Producer-Days">
            <p>Days</p>
          </div>
        </div>
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
      </div>
    </Section>
  )
}

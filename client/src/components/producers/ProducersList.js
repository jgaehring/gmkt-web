import React from 'react';
import Section from 'modules/Section';
import ProducerDays from 'producers/ProducerDays';
import getTypeIcon from 'media/product-types/getTypeIcon.js';
import './ProducersList.css'

function shortenSummary(summary) {
  if (summary.length > 40) {
    return summary.slice(0,39) + "...";
  } else {
    return summary;
  }
}

function ProducerLine(props) {
  const icon = getTypeIcon(props.producer.main_type);
  return (
    <div className="Producer-Line">
      <div className="icon">
        <img src={icon} alt="type" />
      </div>
      <div className="name">
        <p>{props.producer.name}</p>
      </div>
      <div className="summary">
        <p>
          {shortenSummary(props.producer.product_summary)}
        </p>
      </div>
      <ProducerDays seasons={props.producer.seasons}/>
    </div>
  );
}

function ProducersList(props) {
  return (
    <Section>
      <div className="Producer-Line heading">
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
        props.currentProducers.map(producer => {
          return (
            <ProducerLine key={producer.id} producer={producer}/>
          )
        })
      }
    </Section>
  )
};

export default ProducersList;

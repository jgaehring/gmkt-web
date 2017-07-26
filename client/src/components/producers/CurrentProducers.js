import React from 'react';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon.js';
import './CurrentProducers.css'

function getProducerDays(seasons) {
  let currentDays = [];
  seasons.forEach(season => {
    const start = new Date(season.start_date);
    const end = new Date(season.end_date);
    const today = new Date();
    if (start <= today && end >= today) {
      season.present_on.forEach(day => currentDays.push(day))
    }
  });
  return currentDays;
};

function ProducerDays(props) {
  const mon = () => {
    if (props.producerDays.includes(0)) {
      return (<li className="mon">M</li>)
    } else {
      return (<li>&nbsp;</li>)
    }
  }
  const wed = () => {
    if (props.producerDays.includes(2)) {
      return (<li className="wed">W</li>)
    } else {
      return (<li>&nbsp;</li>)
    }
  }
  const fri = () => {
    if (props.producerDays.includes(4)) {
      return (<li className="fri">F</li>)
    } else {
      return (<li>&nbsp;</li>)
    }
  }
  const sat = () => {
    if (props.producerDays.includes(5)) {
      return (<li className="sat">Sa</li>)
    } else {
      return (<li>&nbsp;</li>)
    }
  }
  return (
    <div className="Producer-Days">
      <ul>
        {mon()}
        {wed()}
        {fri()}
        {sat()}
      </ul>
    </div>
  )
}

function shortenSummary(summary) {
  if (summary.length > 40) {
    return summary.slice(0,39) + "...";
  } else {
    return summary;
  }
}

function ProducerLine(props) {
  const icon = getTypeIcon(props.producer.main_type);
  const producerDays = getProducerDays(props.producer.seasons);
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
      <ProducerDays producerDays={producerDays}/>
    </div>
  );
}

function CurrentProducers(props) {
  return (
    <Section>
      <div className="Producer-Line heading">
        <div className="icon">
          <p>
            Type
          </p>
        </div>
        <div className="name">
          <p>
            Name
          </p>
        </div>
        <div className="summary">
          <p>
            Product Summary
          </p>
        </div>
        <div className="Producer-Days">
          <p>
            Days
          </p>
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

export default CurrentProducers;

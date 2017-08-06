import React from 'react';
import './ProducerDays.css'

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
  const producerDays = getProducerDays(props.seasons);
  const day = (num, cls, str) => {
    if (producerDays.includes(num)) {
      return (<li className={cls}>{str}</li>)
    } else if (props.addGaps) {
      return (<li>&nbsp;</li>)
    }
  }
  return (
    <div className="Producer-Days">
      <ul>
        {day(0,"mon","M")}
        {day(2,"wed","W")}
        {day(4,"fri","F")}
        {day(5,"sat","Sa")}
      </ul>
    </div>
  )
}

export default ProducerDays;

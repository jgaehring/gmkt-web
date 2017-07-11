import React from 'react';
import Moment from 'react-moment';

function TodayHeader(props) {
  return (
    (props.marketToday) ?
    <h1>Today's Market</h1> :
    <h1>
      The next market will be on&nbsp;
      <Moment date={props.date} format={'dddd, MMMM Do'} />
    </h1>

  )
}

export default TodayHeader;

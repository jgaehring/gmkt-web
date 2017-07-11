import React from 'react';
import Producers from 'Today/Producers'
import "Today/Attendance.css";

function Attendance(props) {
  return (
    <div className="Attendance">
      <Producers
        producers={props.inProducers}
        headingText="Producers in Attendance Today"/>
      <Producers
        producers={props.expected}
        headingText="Expected Producers"/>
      <Producers
        producers={props.outProducers}
        headingText="Producers Out Today" />
    </div>
  )
}

export default Attendance

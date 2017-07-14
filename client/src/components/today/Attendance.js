import React from 'react';
import Producers from 'today/Producers'

function Attendance(props) {
  return (
    <div id="Attendance">
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

import React from 'react';
import InProducers from './InProducers'
import Expected from './Expected'
import OutProducers from './OutProducers'

function Attendance(props) {
  return (
    <div className="Attendance">
      <InProducers inProducers={props.inProducers} />
      <Expected expected={props.expected} />
      <OutProducers outProducers={props.outProducers} />
    </div>
  )
}

export default Attendance

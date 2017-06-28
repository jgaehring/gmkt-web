import React, { Component } from 'react';
import Attendance from './Attendance';

class Today extends Component {
  render() {
    return (
      <div className="Today">
        <h1>Today</h1>
        <Attendance />
      </div>
    );
  }
};

export default Today

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProducersMain from 'producers/ProducersMain';
import ProducerProfile from 'producers/ProducerProfile';

class Producer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path='/producers' component={ProducersMain}/>
        <Route path='/producers/profile' component={ProducerProfile}/>
      </div>
    )
  }
}

export default Producer;

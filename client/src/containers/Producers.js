import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from 'modules/Spinner'
import ProducersHeader from 'components/producers/ProducersHeader.js'
import ProducersList from 'components/producers/ProducersList.js'
import Header from 'modules/Header';

class ProducerProfile extends Component {
  render() {
    return (
      <Header>
        <h1>Producer Profile</h1>
      </Header>
    )
  }
}

class AllProducers extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  fetchProducers() {
    fetch('/api/v1/producers')
      .then(resp => resp.json())
      .then((data) => {
        const currentProducers = data.producers.filter(producer => {
          let isCurrent = false;
          const current = producer.seasons.forEach(season => {
            const start = new Date(season.start_date);
            const end = new Date(season.end_date);
            const today = new Date();
            if (start <= today && end >= today) {
              isCurrent = true;
            }
          })
          if (isCurrent) {
            return producer;
          }
          return current;
        });
        this.setState({
          loading: false,
          currentProducers: currentProducers
        })
      });
  }

  componentDidMount() {
    this.fetchProducers();
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div>
          <ProducersHeader />
          <ProducersList currentProducers={this.state.currentProducers}/>
        </div>
      )
    }
  }
}

class Producers extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path='/producers' component={AllProducers}/>
        <Route path='/producers/profile' component={ProducerProfile}/>
      </div>
    )
  }
}

export default Producers;

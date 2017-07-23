import React, {Component} from 'react';
import Spinner from 'modules/Spinner'
import MainHeader from './MainHeader.js'
import CurrentProducers from './CurrentProducers.js'

class ProducersMain extends Component {
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
            const end = new Date(season.end_date);
            const today = new Date();
            if (end >= today) {
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
          <MainHeader />
          <CurrentProducers currentProducers={this.state.currentProducers}/>
        </div>
      )
    }
  }
}

export default ProducersMain;

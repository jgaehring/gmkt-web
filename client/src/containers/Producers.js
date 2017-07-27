import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from 'modules/Spinner';
import ProducersHeader from 'producers/ProducersHeader';
import ProducersList from 'producers/ProducersList';
import ProfileHeader from 'producers/ProfileHeader';

class ProducerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: props.match.params.id
    };
  }

  fetchProfile() {
    fetch('/api/v1/producers/' + this.state.id)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          loading: false,
          producer: data.producer
        })
      })
  }

  componentDidMount() {
    this.fetchProfile()
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div>
          <ProfileHeader producer={this.state.producer}/>
        </div>
      )
    }  }
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
        <Route path='/producers/:id' component={ProducerProfile}/>
      </div>
    )
  }
}

export default Producers;

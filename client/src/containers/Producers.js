import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from 'modules/Spinner';
import Section from 'modules/Section';
import ProducersHeader from 'producers/ProducersHeader';
import AllProducersList from 'producers/AllProducersList';
import ProfileHeader from 'producers/ProfileHeader';
import ProductPresences from 'producers/ProductPresences';
import sortVaritiesByProduct from 'utils/sortVarietiesByProduct'

class ProducerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: props.match.params.id,
      producer: [],
      products: []
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

  fetchProducts() {
    fetch('/api/v1/market_day/products?producer_id=' + this.state.id)
      .then(resp => resp.json())
      .then((data) => {
        if (data.products.length > 0) {
          this.setState({
            products: sortVaritiesByProduct(data.products),
            productDate: data.date
          })
        } else {
          const prevDate = data.previous_date;
          fetch('/api/v1/market_day/products?producer_id=' + this.state.id + '&date=' + prevDate + '&round=down')
            .then(resp => resp.json())
            .then(data => {
              this.setState({
                products: sortVaritiesByProduct(data.products),
                productDate: prevDate
              })
            })
        }
      })
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchProducts();
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div>
          <ProfileHeader producer={this.state.producer}/>
          <Section>
            <ProductPresences products={this.state.products} date={this.state.productDate}/>
          </Section>
        </div>
      )
    }
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
          <AllProducersList currentProducers={this.state.currentProducers}/>
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

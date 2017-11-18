import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from 'modules/Spinner';
import ProducersHeader from 'producers/ProducersHeader';
import ProducersList from 'producers/ProducersList';
import ProfileHeader from 'producers/ProfileHeader';
import Products from 'producers/Products';

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

  sortVaritiesByProduct(unsortedProducts) {
    let varietiesByProduct = [];
    unsortedProducts.forEach(product => {
      if (!product.variety_of_id && varietiesByProduct.indexOf(product) === -1) {
        varietiesByProduct.push({
          id: product.id,
          name: product.name,
          type: product.type,
          varieties: []
        })
      } else if (product.variety_of_id) {
        varietiesByProduct.forEach(parentProduct => {
          if (product.variety_of_id === parentProduct.id) {
            parentProduct.varieties.push({
              id: product.id,
              name: product.name,
              type: product.type
            })
          }
        })
      }
    });
    return varietiesByProduct;
  }

  fetchProducts() {
    fetch('/api/v1/market_day/products?producer_id=' + this.state.id)
      .then(resp => resp.json())
      .then((data) => {
        if (data.products.length > 0) {
          this.setState({
            products: this.sortVaritiesByProduct(data.products),
            productDate: data.date
          })
        } else {
          const prevDate = data.previous_date;
          fetch('/api/v1/market_day/products?producer_id=' + this.state.id + '&date=' + prevDate + '&round=down')
            .then(resp => resp.json())
            .then(data => {
              this.setState({
                products: this.sortVaritiesByProduct(data.products),
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
          <Products products={this.state.products} date={this.state.productDate}/>
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

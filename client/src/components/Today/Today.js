import React, { Component } from 'react';
import Moment from 'react-moment';
import Attendance from './Attendance';
import Seasonal from './Seasonal';
import './Today.css'

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market: {},
      products: {
        loading: true,
      },
      attendance: {
        loading: true,
      }
    };
  }

  setProductState(allProducts, seasonalProducts) {
    this.setState({
      products: {
        loading: false,
        allProducts: allProducts,
        seasonalProducts: seasonalProducts
      }
    })
  }

  getTodaysDate() {
    let yyyy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    if (mm < 10) { mm = '0' + mm };
    let dd = new Date().getDate()
    if (dd < 10) { dd = '0' + dd };
    return yyyy + '-' + mm + '-' + dd;
  }

  fetchMarketInfo() {
    fetch('/api/v1/market_day')
    .then( (resp) => resp.json())
    .then( (data) => {
      const todaysDate = this.getTodaysDate();
      const marketDay = ( data.date === todaysDate ? true : false);
      this.setState({
        market: {
          marketDay: marketDay,
          prevDate: data.previous_date,
          nextDate: data.next_date,
          nextDateObject: new Date(data.next_date)
        }
      })
    })
  };

  fetchSeasonalProducts() {
    fetch('/api/v1/market_day/products')
    .then(resp => resp.json())
    .then((data) => {
      if (data.products.length > 0) {
        const allProducts = data.products;
        const seasonalProducts = allProducts.filter( (product) => product.seasonal );
        this.setProductState(allProducts, seasonalProducts);
      } else {
        const prevDate = data.previous_date;
        fetch('/api/v1/market_day/products?date=' + prevDate)
        .then(resp => resp.json())
        .then((data) => {
          const allProducts = data.products.filter(product => product.seasonal);
          const seasonalProducts = allProducts.filter( (product) => product.seasonal );
          this.setProductState(allProducts, seasonalProducts)
        })
      }
    });
  }

  fetchTodaysProducers() {
    fetch('/api/v1/market_day/producers')
      .then(resp => resp.json())
      .then((data) => {
        const allProducers = data.producers;
        const inProducers = allProducers.filter( (producer) =>
          (producer.presences) ?
          producer.presences[0].present :
          null
        );
        const outProducers = allProducers.filter( (producer) =>
          (producer.presences) ?
          !producer.presences[0].present :
          null
        );
        const expected = allProducers.filter( (producer) => !(producer.presences) );
        this.setState({
          attendance: {
            loading: false,
            allProducers: allProducers,
            inProducers: inProducers,
            outProducers: outProducers,
            expected: expected
          }
        })
      });
  }

  componentDidMount() {
    this.fetchSeasonalProducts();
    this.fetchTodaysProducers();
    this.fetchMarketInfo();
  }

  render() {
    return (
      <div className="Today">
        {
          (this.state.market.marketDay) ?
          <h1>Today's Market</h1> :
          <h1>
            The next market will be on&nbsp;
            <Moment
              date={this.state.market.nextDateObject}
              format={'dddd, MMMM Do'} />

          </h1>
        }

        {
          (this.state.products.loading) ?
          <p>Fetching...</p> :
          <Seasonal
                allProducts={this.state.products.allProducts}
                seasonalProducts={this.state.products.seasonalProducts}/>
        }

        {
          (this.state.attendance.loading) ?
          <p>Fetching...</p> :
          <Attendance
                allProducers={this.state.attendance.allProducers}
                inProducers={this.state.attendance.inProducers}
                outProducers={this.state.attendance.outProducers}
                expected={this.state.attendance.expected} />
        }
      </div>
    );
  }
};

export default Today

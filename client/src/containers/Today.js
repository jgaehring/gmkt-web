import React, { Component } from 'react';
import Moment from 'react-moment';
import Attendance from 'Today/Attendance';
import Seasonal from 'Today/Seasonal';
import MapViewer from 'Today/Map';
import 'Today.css'

class Today extends Component {
  constructor() {
    super();
    this.state = {
      market: {
        loading: true,
      },
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
      const date = data.date;
      const todaysDate = this.getTodaysDate();
      const marketToday = ( date === todaysDate ? true : false);
      const marketDay = new Date(date).getDay();
      this.setState({
        market: {
          loading: false,
          date: date,
          marketToday: marketToday,
          prevDate: data.previous_date,
          nextDate: data.next_date,
          nextDateObject: new Date(data.next_date),
          marketDay: marketDay
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
    this.fetchMarketInfo();
    this.fetchSeasonalProducts();
    this.fetchTodaysProducers();
  }

  render() {
    return (
      <div className="Today">
        {
          (this.state.market.marketToday) ?
          <h1>Today's Market</h1> :
          <h1>
            The next market will be on&nbsp;
            <Moment
              date={this.state.market.date}
              format={'dddd, MMMM Do'} />

          </h1>
        }

        {
          (this.state.products.loading) ?
          <p>Fetching...</p> :
          <Seasonal
                className="Seasonal"
                allProducts={this.state.products.allProducts}
                seasonalProducts={this.state.products.seasonalProducts}/>
        }

        {
          (this.state.attendance.loading) ?
          <p>Fetching...</p> :
          <Attendance
                className="Attendance"
                allProducers={this.state.attendance.allProducers}
                inProducers={this.state.attendance.inProducers}
                outProducers={this.state.attendance.outProducers}
                expected={this.state.attendance.expected} />
        }

        {
          (this.state.market.loading) ?
          <p>Fetching...</p> :
            <MapViewer className="Map-Viewer" marketDay={this.state.market.marketDay} />
        }

      </div>
    );
  }
};

export default Today

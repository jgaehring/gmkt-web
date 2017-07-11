import React, { Component } from 'react';
import TodayHeader from 'today/TodayHeader'
import Attendance from 'today/Attendance';
import Seasonal from 'today/Seasonal';
import MapViewer from 'today/Map';

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
      },
      map: {
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

  getCurrentMap() {
    if (this.state.market.marketDay === 0) {
      return "/img/unsq-mon.pdf";
    } else if (this.state.market.marketDay === 2) {
      return "/img/unsq-wed.pdf";
    } else if (this.state.market.marketDay === 4) {
      return "/img/unsq-fri.pdf";
    } else if (this.state.market.marketDay === 5) {
      return "/img/unsq-sat.pdf";
    };
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
    .then( () => {
      this.setState({
        map: {
          loading: false,
          currentMap: this.getCurrentMap()
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
    if ( this.state.market.loading ||
      this.state.attendance.loading ||
      this.state.products.loading ||
      this.state.map.loading ) {
        return <p>Loading...</p>
      } else {

        return (
          <div className="Today">

            <TodayHeader
              marketToday={this.state.market.marketToday}
              date={this.state.market.date} />

            <Seasonal
              className="Seasonal"
              allProducts={this.state.products.allProducts}
              seasonalProducts={this.state.products.seasonalProducts}/>

            <Attendance
              className="Attendance"
              allProducers={this.state.attendance.allProducers}
              inProducers={this.state.attendance.inProducers}
              outProducers={this.state.attendance.outProducers}
              expected={this.state.attendance.expected} />

            <MapViewer className="Map-Viewer" marketDay={this.state.market.marketDay}
              currentMap={this.state.map.currentMap} />

            </div>
          );
      }
  }
};

export default Today

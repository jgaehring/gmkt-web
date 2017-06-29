import React, { Component } from 'react';
import Attendance from './Attendance';
import Seasonal from './Seasonal';
import './Today.css'

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        loading: true,
      },
      attendance: {
        loading: true,
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:8888/api/today/products')
      .then(resp => resp.json())
      .then((data) => {
        const allProducts = data.products;
        const seasonalProducts = allProducts.filter((product) => product.seasonal)
        this.setState({
          products: {
            loading: false,
            allProducts: allProducts,
            seasonalProducts: seasonalProducts
          }
        })
      });

    fetch('http://localhost:8888/api/today/producers')
      .then(resp => resp.json())
      .then((data) => {
        const allProducers = data.producers;
        const inProducers = allProducers.filter( (producer) => producer.presences[0].present);
        const outProducers = allProducers.filter( (producer) => !producer.presences[0].present);
        this.setState({
          attendance: {
            loading: false,
            allProducers: allProducers,
            inProducers: inProducers,
            outProducers: outProducers
          }
        })
      });

  }

  render() {
    return (
      <div className="Today">
        <h1>Today's Market</h1>
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
                outProducers={this.state.attendance.outProducers} />
        }
      </div>
    );
  }
};

export default Today

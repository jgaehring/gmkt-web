import React, { Component } from 'react';


class Seasonal extends Component {
  render() {
    return (
      <div className="Seasonal">
        <h2>What's in Season</h2>
        {this.props.seasonalProducts.map( (product) => {
          return (
            <div className="seasonal-product" key={product.id}>
              <img src={product.pic_small_url} alt={product.name}/>
              <p>{product.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Seasonal

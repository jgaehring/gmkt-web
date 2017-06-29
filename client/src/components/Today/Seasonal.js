import React, { Component } from 'react';
import Slider from 'react-slick';

class Seasonal extends Component {
  render() {
    const settings = {
      accesibility: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      lazyLoad: true,
      arrows: true,
      dots: true,
    }
    return (
      <div className="Seasonal">
        <h2>What's in Season</h2>
        <Slider className="seasonal-slider" {...settings}>
          {this.props.seasonalProducts.map( (product) => {
            return (
              <div className="seasonal-product" key={product.id}>
                <img src={product.pic_small_url} alt={product.name}/>
                <p>{product.name}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Seasonal

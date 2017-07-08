import React from 'react';
import Slider from 'react-slick';

function Seasonal(props) {
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
        {props.seasonalProducts.map( (product) => {
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

export default Seasonal

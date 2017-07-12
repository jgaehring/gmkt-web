import React from 'react';
import Slider from 'react-slick';
import Section from 'modules/Section'
import Thumbnail from 'modules/Thumbnail'
import "today/Seasonal.css";

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
    <Section className="Seasonal">
      <h2>What's in Season</h2>
      <Slider className="seasonal-slider" {...settings}>
        {props.seasonalProducts.map( (product) => {
          return (
            <div className="seasonal-product" key={product.id}>
              <Thumbnail
                imgURL={product.pic_small_url}
                altText={product.name}
                thumbnailText={product.name}
                />
            </div>
          )
        })}
      </Slider>
    </Section>
  )
}

export default Seasonal

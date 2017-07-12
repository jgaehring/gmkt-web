import React from 'react';
import Slider from 'react-slick';
import Section from 'modules/Section'
import Thumbnail from 'modules/Thumbnail'
import "today/Seasonal.css";

function getSlideNumber() {
  if (window.matchMedia("(min-width: 1500px)").matches) {
    return 8;
  } else if (window.matchMedia("(min-width: 900px)").matches) {
    return 6;
  } else {
    return 4;
  }
}

function Seasonal(props) {
  let slideNumber = getSlideNumber();

  const settings = {
    accesibility: true,
    slidesToShow: slideNumber,
    slidesToScroll: slideNumber,
    lazyLoad: true,
    arrows: true,
  }
  return (
    <Section className="Seasonal-List">
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

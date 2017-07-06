import React from 'react';
import LazyLoad from 'react-lazyload';

function Expected(props) {

  let expectedHeading = null;
  if (props.expected.length > 0) {
    expectedHeading = <h2>Expected Producers</h2>
  };

  let expectedBody = null;
  if (props.expected.length > 0) {
    expectedBody = props.expected.map( (producer) => {
      return (
        <div className="producer" key={producer.id}>
        <LazyLoad height={"20vw"} offset={500} once>
        <img src={producer.pic_url} alt={producer.name}/>
        </LazyLoad>
        <p>{producer.name}</p>
        </div>
      )
    })
  };

  return (
    <div>
      {expectedHeading}
      {expectedBody}
    </div>
  );
};

export default Expected;

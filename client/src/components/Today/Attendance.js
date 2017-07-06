import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class Attendance extends Component {
  render() {
    return (
      <div className="Attendance">
        <h2>Producers in Attendance Today</h2>
          {this.props.inProducers.map( (producer) => {
            return (
                <div className="producer" key={producer.id}>
                  <LazyLoad height={"20vw"} offset={500} once>
                    <img src={producer.pic_url} alt={producer.name}/>
                  </LazyLoad>
                  <p>{producer.name}</p>
                </div>
            )
          })}

        <h2>Producers We're Still Expecting to Arrive</h2>
          {this.props.expected.map( (producer) => {
            return (
                <div className="producer" key={producer.id}>
                  <LazyLoad height={"20vw"} offset={500} once>
                    <img src={producer.pic_url} alt={producer.name}/>
                  </LazyLoad>
                  <p>{producer.name}</p>
                </div>
            )
          })}

        <h2>Producers Who Have Cancelled for Today</h2>
          {this.props.outProducers.map( (producer) => {
            return (
                <div className="producer" key={producer.id}>
                  <LazyLoad height={"20vw"} offset={500} once>
                    <img src={producer.pic_url} alt={producer.name}/>
                  </LazyLoad>
                  <p>{producer.name}</p>
                </div>
            )
          })}

      </div>
    )
  }
}

export default Attendance

import React, { Component } from 'react';


class Attendance extends Component {
  render() {
    return (
      <div className="Attendance">
        <h2>Producers in Attendance</h2>
          {this.props.allProducers.map( (producer) => {
            return (
              <div className="producer" key={producer.id}>
                <img src={producer.pic_url} alt={producer.name}/>
                <p>{producer.name}</p>
              </div>
            )
          })}

      </div>
    )
  }
}

export default Attendance

import React, {Component} from 'react';
import Section from 'modules/Section'

class ProducerRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      date: props.date,
      producerInfo: []
    }
  }

  fetchProducerInfo(id) {
    fetch('/api/v1/producers/' + id)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          producerInfo: data.producer
        })
      })
  }

  componentDidMount() {
    this.fetchProducerInfo(this.state.id);
  }

  render() {
    return <p>{this.state.producerInfo.name + " on " + this.state.date}</p>
  }
}

function ProducerPresences(props) {
  return (
    <Section>
      {
        props.presences.map( producer =>
          <ProducerRow
            id={producer.producer_id}
            date={producer.date}
            key={ producer.producer_id + "_" + producer.date } />
        )
      }
    </Section>
  )
}

export default ProducerPresences;

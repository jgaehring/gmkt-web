import React, {Component} from 'react';
import Section from 'modules/Section'

class ProducerLine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      producer: []
    }
  }

  fetchProducerInfo(id) {
    fetch('/api/v1/producers/' + id)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          producer: data.producer
        })
      })
  }

  componentDidMount() {
    this.fetchProducerInfo(this.state.id);
  }

  render() {
    return <p>{this.state.producer.name}</p>
  }
}

function Producers(props) {
  return (
    <Section>
      {
        props.presences.map(producer => <ProducerLine id={producer.producer_id} />)
      }
    </Section>
  )
}

export default Producers;
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from 'modules/Spinner';
import ProductsHeader from 'products/ProductsHeader';
import ProfileHeader from 'products/ProfileHeader';
import ProducerPresences from 'products/ProducerPresences';

class ProductProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      id: props.match.params.id,
      product: [],
      presences: [],
    }
    this.fetchProducerInfo = this.fetchProducerInfo.bind(this)
  }

  fetchProfile() {
    fetch('/api/v1/products/' + this.state.id)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({
        loading: false,
        product: data.product
      })
    })
  }

  fetchPresences() {
    fetch('/api/v1/products/' + this.state.id + '?presences')
    .then(resp => resp.json())
    .then(data => {
      const filteredPresences = this.filterPresences(data.product.presences);
      return filteredPresences.map(this.fetchProducerInfo);
    })
  }

  // Filter producer presences as they come in from the API, taking only the most recent presence for each producer
  filterPresences(presences) {
    return presences.filter( (e, i, a) => {
      const isNewest = a.reduce( (acc, cur) => {
        if (acc) {
          const isSameProducer = ( e.producer_id === cur.producer_id )
          const isNewer = ( e.date >= cur.date )
          return isSameProducer ? isNewer : acc;
        } else {
          return false
        }
      }, true);
      return isNewest;
    })
  }

  fetchProducerInfo(presence) {
    fetch('/api/v1/producers/' + presence.producer_id)
      .then(resp => resp.json())
      .then(data => {
        this.setState( (prevState) => ({
          loading: false,
          presences: prevState.presences.concat({
            date: presence.date,
            producer_id: presence.producer_id,
            producerInfo: data.producer
          })
        }))
      })
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchPresences();
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div>
          <ProfileHeader product={this.state.product}/>
          <ProducerPresences presences={this.state.presences}/>
        </div>
      )
    }
  }

}

class AllProducts extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div>
          <ProductsHeader />
        </div>
      )
    }
  }

}

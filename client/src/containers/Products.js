import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ProductsHeader from 'products/ProductsHeader';
import Spinner from 'modules/Spinner';
import ProfileHeader from 'products/ProfileHeader';
import Producers from 'products/Producers';

class ProductProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      id: props.match.params.id,
      product: [],
      presences: [],
    }
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
      this.setState({
        loading: false,
        presences: this.filterPresences(data.product.presences)
      })
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
          <Producers presences={this.state.presences}/>
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

class Product extends Component {
  render() {
    return (
      <div>
        <Route exact path='/products' component={AllProducts}/>
        <Route path='/products/:id' component={ProductProfile}/>
      </div>
    )
  }
}

export default Product;

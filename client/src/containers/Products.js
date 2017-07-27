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
      producers: []
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
        presences: data.product.presences
      })
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

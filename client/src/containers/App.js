import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Today from 'containers/Today';
import Producers from 'containers/Producers';
import Product from 'containers/Product';
import Map from 'containers/Map';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({
      loading: false,
    })
  }
  render() {
    return (
      this.state.loading ?
      null :
      <Router >
        <div className="App">
          <Route exact path="/" component={Today}/>
          <Route path="/today" component={Today}/>
          <Route path="/producers" component={Producers}/>
          <Route path="/products" component={Product}/>
          <Route path="/maps" component={Map}/>
        </div>
      </Router>
    );
  }
}

export default App;

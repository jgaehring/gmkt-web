import React, { Component } from 'react';
import Page from 'modules/Page'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pageLayout: {
        default: "TODAY"
      }
    }
  }

  componentDidMount() {
    if (!this.state.pageLayout.current) {
      this.setState({
        loading: false,
        pageLayout: {
          default: "TODAY",
          current: this.state.pageLayout.default
        }
      })
    }
  }
  render() {
    return (
      this.state.loading ?
      <p>Loading...</p> :
      <div className="App">
        <Page currentPage={this.state.pageLayout.current}/>
      </div>
    );
  }
}

export default App;

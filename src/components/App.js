import React, { Component } from 'react';

import SeasonDisplay from './SeasonDisplay';

class App extends Component {

  state = { latitude: null, errorMessage: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude })
      },
      error => {
        this.setState({ errorMessage: error.message })
      }
    );
  }


  render() {
    if (this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay latitude={this.state.latitude}/>
    }
    return <div>Loading...</div>;
  }
};

export default App;
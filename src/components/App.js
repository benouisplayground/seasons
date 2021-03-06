import React, { Component } from 'react';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

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

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay latitude={this.state.latitude}/>
    }
    return <Loader message="Please accept location request" />;
  }


  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
};

export default App;
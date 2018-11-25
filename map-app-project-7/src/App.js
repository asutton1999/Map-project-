import React, { Component } from 'react';
import './App.css';

class App extends Component {

initMap =() => {
  let map = new  window.google.maps.Map(document.getElementById('map'),
   {center: { lat:27.948460, lng: -80.663460} , zoom:14});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;

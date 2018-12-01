import React, { Component } from 'react';
import './App.css';
import SideBar  from './components/SideBar';
import Marker from './components/Marker'

class App extends Component {


componentDidMount = () => {
  this.createMap();
}

createMap = () => {
  scriptLoader ('https://maps.googleapis.com/maps/api/js?key=AIzaSyDy8YsvWWMMNGGHvIincdacAy34zKYKUN0&v=3&callback=initMap');
  window.initMap = this.initMap;
}

initMap =() => {
  let map = new  window.google.maps.Map(document.getElementById('map'),
   {center: { lat:27.949515, lng: -80.658322} , zoom:14});
    }



  render() {
    return (
      <main>
      <SideBar/>
      <div id = 'map'> <Marker map ={this.initmap}/>  </div>
    </main>
);
  }
}

 function scriptLoader(url) {
  let index = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;

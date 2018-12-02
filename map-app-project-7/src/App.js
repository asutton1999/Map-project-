import React, { Component } from 'react';
import './App.css';
import SideBar  from './components/SideBar';
//import Marker from './components/Marker'

class App extends Component {


componentDidMount = () => {
  this.createMap();
}


createMap = () => {
  scriptLoader ('https://maps.googleapis.com/maps/api/js?key=AIzaSyDy8YsvWWMMNGGHvIincdacAy34zKYKUN0&v=3&callback=initMap');
  window.initMap = this.initMap;
}

// Stores data and contains method to call it
locations = (info, index) => {
    let locations = [
      {address: '192 Broyles Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.938230, lng:-80.668610 }},
      {address:  '800 SE Yellow Wood Ct, Palm Bay, FL 32909' , coordinates: { lat: 27.945550, lng:-80.650760 }},
      {address: '520 Remington Green Dr SE Unit 103, Palm Bay, FL 32909'  , coordinates: { lat: 27.939870, lng: -80.657970}},
      {address: '2941 Emerson Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.958870, lng:-80.648330 }},
      {address:  '829 Eldron Blvd SE, Palm Bay, FL 32909' , coordinates: { lat:27.979620, lng:-80.661293}}
      ]

      if(info === 'address') {
      return(locations[index].address)
      }
      if (info === 'coordinates')  {
      return(locations[index].coordinates)
      }
      if(info === 'length') {
        return(locations.length)
      }
     }


initMap = () => {
  console.log(this.locations( 'coordinates', 2))
  let map = new  window.google.maps.Map(document.getElementById('map'),
   {center: { lat:27.948460, lng:-80.663460} , zoom:13});
     let markers = [];
     for (let i=0; i< this.locations('length',i); i++){
       console.log(i);
       let position = this.locations( 'coordinates', i);
       let name = this.locations('address', i);

     let marker = new window.google.maps.Marker({
    map: map,
    position:position,
    title:name,
    id:i
  })
    }
}



  render() {
    return (
      <main>
      <SideBar locations ={this.locations}  />
      <div id = 'map'>  </div>
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

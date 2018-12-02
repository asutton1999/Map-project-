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
      {address: '192 Broyles Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.938230, lng:-80.668610 } , src: " 'images\\Realtor Photo 192 Broyles.jpg'" , alt: "'picture of 192 Broyles street view single story.'"},
      {address:  '800 SE Yellow Wood Ct, Palm Bay, FL 32909' , coordinates: { lat: 27.945550, lng:-80.650760 }, src:" 'images\\Realtor Photo 800 Yellow Wood.jpg'", alt: "'picture of 800 Yellow Wood street view two story and large front yard.'"},
      {address: '520 Remington Green Dr SE Unit 103, Palm Bay, FL 32909'  , coordinates: { lat: 27.939870, lng: -80.657970}, src: "'src\\images\\Realtor Photo 520 Remington.jpg'", alt: "'picture of 520 Remington street view single story.'"},
      {address: '2941 Emerson Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.958870, lng:-80.648330 }, src:"'images\\Realtor Photo 2941 Emerson.jpg'", alt: "'picture of 2941 Emerson street view single story.'" },
      {address:  '829 Eldron Blvd SE, Palm Bay, FL 32909' , coordinates: { lat:27.979620, lng:-80.661293}, src:"'images\\Realtor Photo 829 Eldron.jpg'", alt:" 'picture of 829 Eldron street view single story and front yard.'" }
      ]

      if(info === 'address') {
      return(locations[index].address)
      }
      if (info === 'coordinates')  {
      return(locations[index].coordinates)
      }
      if (info === 'image') {
        return( locations[index].src)
      }
      if (info === 'alt'){
        return(locations[index].alt)
      }
      if(info === 'length') {
        return(locations.length)
      }
    }


// creates Map, markers, and infoWindow
initMap = () => {
  let map = new  window.google.maps.Map(document.getElementById('map'),
   {center: { lat:27.948460, lng:-80.663460} , zoom:13});
     let markers = [];
     for (let i=0; i< this.locations('length',i); i++){
       console.log(i);
       let position = this.locations( 'coordinates', i);
       let name = this.locations('address', i);
       let imageUrl = this.locations ('image', i);
       let alt = this.locations('alt', i)
console.log('<img src = '+ imageUrl + ' alt = ' + alt + '>')

       let content = '<div id="content">' + '<div id="image">' + '<img src = '+ imageUrl + ' alt = ' + alt + '>' +  '</div>' + '<div id ="name">' + name + '</div>' ;



     let marker = new window.google.maps.Marker({
    map: map,
    position:position,
    title:name,
    id:i
  })
    let infoWindow = new window.google.maps.InfoWindow ({
      content: content
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker)
    });

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

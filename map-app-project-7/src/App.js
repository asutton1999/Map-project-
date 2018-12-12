import React, { Component } from 'react';
import './App.css';
import SideBar  from './components/SideBar';
import House1 from './images/Realtor-Photo-192-Broyles.jpg'
import House2 from './images/Realtor-Photo-800-Yellow-Wood.jpg'
import House3 from './images/Realtor-Photo-520-Remington.jpg'
import House4 from './images/Realtor-Photo-2941-Emerson.jpg'
import House5 from './images/Realtor-Photo-829-Eldron.jpg'
import ShowHide from './components/Show-Hide'
class App extends Component {

state = {
  markers: [],
  infoWindow:[],
}


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
      {address: '192 Broyles Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.938230, lng:-80.668610 }  , alt: "'picture of 192 Broyles street view single story.'"},
      {address:  '800 SE Yellow Wood Ct, Palm Bay, FL 32909' , coordinates: { lat: 27.945550, lng:-80.650760 }  , alt: "'picture of 800 Yellow Wood street view two story and large front yard.'"},
      {address: '520 Remington Green Dr SE Unit 103, Palm Bay, FL 32909'  , coordinates: { lat: 27.939870, lng: -80.657970}, alt: "'picture of 520 Remington street view single story.'"},
      {address: '2941 Emerson Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.958870, lng:-80.648330 } , alt: "'picture of 2941 Emerson street view single story.'" },
      {address:  '829 Eldron Blvd SE, Palm Bay, FL 32909' , coordinates: { lat:27.979620, lng:-80.661293}, alt:" 'picture of 829 Eldron street view single story and front yard.'" }
      ]
      if(info === 'address') {
      return(locations[index].address)
      }
      if (info === 'coordinates')  {
      return(locations[index].coordinates)
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
       let alt = this.locations('alt', i);
       let option = i + 1;
       let image;
       switch (option) {
         case 1 :  image = House1;
            break;
         case 2 : image = House2;
            break;
         case 3 : image = House3;
            break;
         case 4 : image = House4;
            break;
         case 5 :  image = House5;
       }

       let content = '<div id="content">' + '<div id="image">' + '<img src =' + image + ' alt = ' + alt + '>' +  '</div>' + '<div id ="name">' + name + '</div>' ;



    let marker = new window.google.maps.Marker({
    map: map,
    position:position,
    title:name,
    animation: window.google.maps.Animation.DROP,
    id:i
  })
  markers.push(marker)
  this.setState({markers: markers})
  console.log(markers)
  console.log(this.state.markers)
    let infoWindow = new window.google.maps.InfoWindow ({
      content: content
    });
     this.setState({infoWindow: infoWindow})
    marker.addListener('click', function(){
      marker.setAnimation(window.google.maps.Animation.BOUNCE)
      infoWindow.open(map, marker)
    });
    marker.addListener('dblclick', function() {
      infoWindow.close();
      marker.setAnimation(null);
    })

    infoWindow.addListener('closeclick', function (){
      marker.setAnimation(null);
    })
  } }


listClick =(listItem) => {
  console.log(this.state.markers)
   let marker = this.state.markers.find((listItem) => listItem.innerHTML === marker.title);
   console.log(marker)
   listItem.addEventListener('click', function(){
     this.state.markers.setAnimation(window.google.maps.Animation.BOUNCE)
     this.state.infoWindow.open(marker.map,this.state.markers)
   });
}

  render() {

    return (
      <main>
      <SideBar locations ={this.locations} markers = {this.state.markers} infoWindow ={ this.state.infoWindow} listClick ={this.listClick} />
      <div id = 'map' role ='application'>  </div>
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

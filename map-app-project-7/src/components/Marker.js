import React, {Component} from 'react';

class Marker extends Component {
//locations taken from  houses listed on realtor.com from 11/29/2018 to 12/1/2018

  render(){
    let locations = [
        {address: '192 Broyles Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.938230, lng:-80.668610 }},
        {address:  '800 SE Yellow Wood Ct, Palm Bay, FL 32909' , coordinates: { lat: 27.945550, lng:-80.650760 }},
        {address: '520 Remington Green Dr SE Unit 103, Palm Bay, FL 32909'  , coordinates: { lat: 27.939870, lng: -80.657970}},
        {address: '2941 Emerson Dr SE, Palm Bay, FL 32909'  , coordinates: { lat:27.958870, lng:-80.648330 }},
        {address:  '1235 Schayler St SW, Palm Bay, FL 32908' , coordinates: { lat:27.994020, lng:-80.706440 }}
        ]
      let markers = [];

      for (let i=0; i< locations.length; i++){
        let position = locations[i].coordinates;
        let name = locations[i].address;

      let marker = new window.google.maps.Marker({
        map:this.props.map,
        position:position,
        title:name,
        id:i
      })
      markers.push(marker);
      }
    return(
     markers
    )

  }
}
 export default Marker;

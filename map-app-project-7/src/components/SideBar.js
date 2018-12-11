import React, {Component} from 'react';
import ShowHide from './Show-Hide';
import Filter from './Filter.js'
class SideBar extends Component {

componentDidMount =() => {
  this.appendLocations()
//  this.addClick();
}
  appendLocations = () => {
    for (let i=0; i< this.props.locations('length',i); i++){
      let list = document.getElementById('locations');
        let li = document.createElement('li');
        li.setAttribute('id', i);
        let address = this.props.locations('address', i);
        console.log(address);
        list.append(li);
         let element = document.getElementById(i);
        element.innerHTML = address;
        //element.addEventListener('click', this.props.listClick(element))
    }
  }

/*addClick = () => {
  for (let j=0; j< this.props.locations('length',j); j++) {
    let address =  document.getElementById(j);
    console.log(address)
    address.addEventListener('click', function () {
    console.log('clicked')
    })
  }
} */



  render(){

    return(
      <div id='sideBar'>
      <ShowHide  onchangeDisplaySideBar ={this.changeDisplaySideBar} onChangeDisplay ={this.props.onChangeDisplay}/>
      <h2> Search for Houses </h2>
      <Filter  locations = {this.props.locations} />
      <ul id ='locations'>
      </ul>
      </div>
    )

  }
}
 export default SideBar;

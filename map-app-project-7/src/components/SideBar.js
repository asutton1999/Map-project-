import React, {Component} from 'react';
import ShowHide from './Show-Hide';
import Filter from './Filter.js'
import List from './list.js'
class SideBar extends Component {

  state = {

  }

 componentDidMount =() => {
   console.log(this.props.markers)

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
        console.log(this.props.markers);


    }
}

addClick = () => {
for ( let i =0;i< this.props.locations('length',i); i++)  {
  let element = document.getElementById(i);
  console.log(this.props.markers);
  element.addEventListener('click', this.props.listClick(element))
}
}


  render(){
    console.log(this.props.markers)

    return(
      <div id='sideBar'>
      <ShowHide  onchangeDisplaySideBar ={this.changeDisplaySideBar} onChangeDisplay ={this.props.onChangeDisplay}/>
      <h2> Search for Houses </h2>
      <Filter  locations = {this.props.locations} />
      <List markers = {this.props.markers} appendLocations = {this.appendLocations} addClick ={this.addClick} />
      </div>
    )

  }
}
 export default SideBar;

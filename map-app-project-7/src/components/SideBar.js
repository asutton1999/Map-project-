import React, {Component} from 'react';

class SideBar extends Component {

componentDidMount =() => {
  this.appendLocations()
}
  appendLocations = () => {
    for (let i=0; i< this.props.locations('length',i); i++){
      let list = document.getElementById('locations');
        let li = document.createElement('li');
        li.setAttribute('id', i)
        let address = this.props.locations('address', i);
        console.log(address);
        list.append(li);
         let element = document.getElementById(i)
        element.innerHTML = address;
    }
  }


  render(){

    return(
      <div id='sideBar'>
      <h2> Search for Houses </h2>
      <form id='filter' action='search'>
      Address: <input type ='text' />
       <input type="submit" value="Submit" />
      </form>
      <ul id ='locations'>
      </ul>
      </div>
    )

  }
}
 export default SideBar;

import React, {Component} from 'react';

class SideBar extends Component {
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

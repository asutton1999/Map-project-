import React, {Component} from 'react';

class Filter extends Component {




  render() {
    return (
      <form id='filter' action='search'>
      Address: <input type ='text' />
      <input type="submit" value="Submit" />
     </form>
    )

}
}
export default Filter;

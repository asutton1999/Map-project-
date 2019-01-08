import React, {Component} from 'react';

class Filter extends Component {




  render() {
    return (
    <div id ='filter'>
      <form id='filter' action='search'>
      Address: <input id='addressField' type ='text' /> <br/>
      <input type="radio" name ="distance"/> 1 mi
      <input type="radio" name="distance" />  5 mi
      <input type="radio" name="distance" />  10 mi
      <input type="submit" value="Submit" onClick ={this.props.searchbydistance} />
     </form>
    </div>
    )

}
}
export default Filter;

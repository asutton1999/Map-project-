import React, {Component} from 'react';
class List extends Component {

componentDidMount = () => {
  this.props.appendLocations()
  this.props.addClick();
}

  render() {
    console.log(this.props.markers)

   return (

    <div id ='list'>
      <ul id ='locations'>
      {console.log(this.props.markers)}
      </ul>

      </div>
    )

  }
  }
  export default List;

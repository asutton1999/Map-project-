import React, {Component} from 'react';
class List extends Component {

componentDidMount = () => {


}

  render() {
    console.log(this.props.markers)

   return (

    <div id ='list'>
      <ul id ='locations'>
      {console.log(this.props.markers)}
      {this.props.markers.map((marker, index) => {
          return (<li key={index}
            onClick={()=> {
              this.props.onmarkerClick(marker);
            }}
          >{marker.title}</li>)
        })}

      </ul>

      </div>
    )

  }
  }
  export default List;

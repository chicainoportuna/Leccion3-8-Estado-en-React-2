import React, {Component} from "react";

class Usersfilms extends Component {
  render() {
    return (
      <div className="film">
      <h1>{this.props.name}</h1>
      <p>{this.props.description}</p>
      <h5>{this.props.genre}</h5>
    </div>
    );
  }
}

export default Usersfilms;
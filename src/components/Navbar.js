import React, { Component } from "react";
import PropTypes from "prop-types";
import myIcon from '../img/bodhran.svg';

export class Navbar extends Component {
  static defaultProps = {
    title: "Bodhran",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <img src={myIcon} style={iconStyle} alt="true"/>
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}
const iconStyle = {
  width: "3em",
  margin: "0.2em"
   
};

export default Navbar;

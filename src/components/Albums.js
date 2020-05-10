import React, { Component } from "react";
import AlbumItem from "./AlbumItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class Albums extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div style={albumStyle}>
          {this.props.albums.map((album, index) => (
            <AlbumItem key={index} album={album} />
          ))}
        </div>
      );
    }
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
}

const albumStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};
// const albumVerticalListStyle = {
//   display: "block",
//   gridGap: "1rem",
//   float: "center",
// };

export default Albums;

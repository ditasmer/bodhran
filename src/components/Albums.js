import React, { Component } from "react";
import AlbumItem from "./AlbumItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class Albums extends Component {
  state = {
    albumsSel: []
  };

  splitAlbums(){
    
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    
    } else {
      console.log(Object.keys(this.props.albums).length);
      let endAlbum = 20 * this.props.activePage;
      let iniAlbum = endAlbum - 20;
      console.log(`slice albums from ${iniAlbum} to ${endAlbum}`);
      let albumsSelection = this.props.albums.slice(iniAlbum, endAlbum);
      console.log(`selection:`);
      console.log(albumsSelection);

      return (
        <div style={albumStyle}>
          {albumsSelection.map((album, index) => (
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
  activePage: PropTypes.number.isRequired,
};

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

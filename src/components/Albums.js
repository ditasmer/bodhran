import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class Albums extends Component {
  
  render() {
    return (
      <div style={albumStyle}>
        {this.props.albums.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
      </div>
    );
  }
}

const albumStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Albums;

import React, { Component } from "react";

class AlbumItem extends Component {
  

  render() {
      const { artistName, collectionName, artworkUrl60 } = this.props.album;
    return (
      <div className='card text-center'>
        <img
          src={artworkUrl60}
          alt=''
          style={{ width: '60px' }}
        />
        <h3>{artistName}</h3>
        <h3>{collectionName}</h3>
      </div>
    );
  }
}

export default AlbumItem;

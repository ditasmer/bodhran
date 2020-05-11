import React, { Component } from "react";

class AlbumItem extends Component {
  

  render() {
      const { artistName, collectionName, artworkUrl60 } = this.props.album;
    return (
      // <div className='card text-center'>
      <div className='card'>
        <img
          src={artworkUrl60}
          alt=''
          style={{ width: '60px' }}
        />
        <h5>{artistName}</h5>
        <h6>{collectionName}</h6>
      </div>
    );
  }
}

export default AlbumItem;

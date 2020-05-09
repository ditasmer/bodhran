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
        <h4>{artistName}</h4>
        <h5>{collectionName}</h5>
      </div>
    );
  }
}

export default AlbumItem;

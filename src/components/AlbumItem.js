import React, { Component } from "react";

class AlbumItem extends Component {
  constructor() {
    super();
    this.state = {
      artistName: "Queen",
      collectionName: "The Platinum Collection (Greatest Hits I, II & III)",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9e/58/3b/9e583b8c-785e-64ee-ce3f-dc365f263861/source/60x60bb.jpg",
    };
  }

  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.artworkUrl60}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{this.state.artistName}</h3>
        <h3>{this.state.collectionName}</h3>
      </div>
    );
  }
}

export default AlbumItem;

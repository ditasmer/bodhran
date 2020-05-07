import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class Albums extends Component {
  state = {
    albums: [
      {
        artistName: "Queen",
        collectionName: "The Platinum Collection (Greatest Hits I, II & III)",
        artworkUrl60:
          "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9e/58/3b/9e583b8c-785e-64ee-ce3f-dc365f263861/source/60x60bb.jpg",
      },
      {
        artistName: "Queen",
        collectionName: "The Platinum Collection (Greatest Hits I, II & III)",
        artworkUrl60:
          "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9e/58/3b/9e583b8c-785e-64ee-ce3f-dc365f263861/source/60x60bb.jpg",
      },
      {
        artistName: "Queen",
        collectionName: "The Platinum Collection (Greatest Hits I, II & III)",
        artworkUrl60:
          "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9e/58/3b/9e583b8c-785e-64ee-ce3f-dc365f263861/source/60x60bb.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.albums.map((album, index) => (
          <div key={index}>{album.artistName}</div>
        ))}
      </div>
    );
  }
}

export default Album;

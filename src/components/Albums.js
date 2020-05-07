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
        artistName: "Beyoncé",
        collectionName: "BEYONCÉ",
        artworkUrl60:
          "https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/60x60bb.jpg",
      },
      {
        artistName: "Nicki Minaj",
        collectionName: "Queen",
        artworkUrl60:
          "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/5a/80/a6/5a80a661-3803-e95c-218d-8dc75fff4d14/source/60x60bb.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.albums.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
      </div>
    );
  }
}

export default Albums;

import React, { Component } from "react";
import AlbumItem from "./AlbumItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import img_grid from "../img/img_grid.png";
import img_list from "../img/img_list.png";

class Albums extends Component {
  state = {
    gridStyle: true,
  };

  switchAlbumStyle() {
    this.setState({ gridStyle: !this.state.gridStyle });
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      //Split the Albums
      console.log(Object.keys(this.props.albums).length);
      let endAlbum = 20 * this.props.activePage;
      let iniAlbum = endAlbum - 20;
      console.log(`slice albums from ${iniAlbum} to ${endAlbum}`);
      let albumsSelection = this.props.albums.slice(iniAlbum, endAlbum);
      console.log(`selection:`);
      console.log(albumsSelection);

      //Select album style
      console.log(this.state.gridStyle);
      let classNameAlbumStyle = "albumVerticalListStyle text-left";
      let img_button = img_grid;
      if (this.state.gridStyle) {
        classNameAlbumStyle = "albumGridStyle text-center";
        img_button = img_list;
      }

      //Render button grid-list style
      const renderGridListStyle = () => {
        if (albumsSelection.length > 0) {
          return (
            <div>
              <button
                onClick={this.switchAlbumStyle.bind(this)}
                className="imgbtn"
              >
                <img src={img_button} className="icon" />
              </button>
            </div>
          );
        }
      };

      return (
        <div>
          {renderGridListStyle()}
          <div className={classNameAlbumStyle}>
            {albumsSelection.map((album, index) => (
              <AlbumItem key={index} album={album} />
            ))}
          </div>
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

export default Albums;

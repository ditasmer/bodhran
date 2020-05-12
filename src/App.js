import React, { Component } from "react";
import axios from "axios";
import Albums from "./components/Albums";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Pagination from "react-js-pagination";
import "./App.scss";

class App extends Component {
  state = {
    albums: [],
    loading: false,
    activePage: 1,
  };

  //Search itunes Albums
  searchAlbums = async (text) => {
    console.log(text);
    this.setState({ loading: true });
    const res = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: text,
        entity: "album",
        limit: 200,
      },
    });

    console.log(res.data);
    this.setState({ albums: res.data.results, loading: false });
    //console.log(this.state.albums);
  };

  //Paginator
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchAlbums={this.searchAlbums} />
          <div className="paginator-center">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={20}
              totalItemsCount={this.state.albums.length}
              pageRangeDisplayed={10}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
          <Albums loading={this.state.loading} albums={this.state.albums} activePage={this.state.activePage} />
        </div>
      </div>
    );
  }
}

export default App;

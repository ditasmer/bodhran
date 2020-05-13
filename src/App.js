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

    console.log("data:");
    console.log(res.data);
    this.setState({ albums: res.data.results, loading: false });
  };

  //Paginator
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    //Condition to show paginator
    const renderPaginator = () => {
      if (this.state.albums.length > 0) {
        return (
          <div>
            <Pagination
              className="customList"
              activePage={this.state.activePage}
              itemsCountPerPage={20}
              totalItemsCount={this.state.albums.length}
              pageRangeDisplayed={10}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
        );
      }
    };

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchAlbums={this.searchAlbums} />
          {renderPaginator()}
          <Albums
            loading={this.state.loading}
            albums={this.state.albums}
            activePage={this.state.activePage}
          />
        </div>
      </div>
    );
  }
}

export default App;

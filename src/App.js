import React, { Component } from "react";
import axios from "axios";
import Albums from "./components/Albums";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.scss";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    albums: [],
    loading: false,
    activePage: 15,
    // itemClass:"page-item",
    // linkClass:"page-link",
  };

  //Search itunes Albums
  searchAlbums = async text => {
    console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      "https://itunes.apple.com/search", {
        params: {
          term: text,
          entity: 'album',
          limit: 200
        }
      }
    );

    console.log(res.data);
    console.log(res.data.resultCount);
    this.setState({ albums: res.data.results, loading: false });
    console.log(this.state.albums);
    
  };

  //Pagination
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchAlbums={this.searchAlbums} />
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={20}
          totalItemsCount={this.state.albums.length}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange.bind(this)}
          />
          <Albums loading={this.state.loading} albums={this.state.albums} totalItemsCount={this.state.albums.length} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;

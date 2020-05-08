import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import Albums from "./components/Albums";
import Navbar from './components/Navbar';
import "./App.css";

class App extends Component {
  state = {
    albums: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      "https://itunes.apple.com/search?term=Queen&entity=album&limit=20"
    );

    console.log(res.data);
    this.setState({ albums: res.data.results, loading: false });
    console.log(this.state.albums)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'> 
        <Albums loading={this.state.loading} albums={this.state.albums} />
        </div>
      </div>
    );
  }
}

export default App;

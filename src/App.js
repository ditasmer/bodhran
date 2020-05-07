import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import Albums from "./components/Albums";
import "./App.css";

class App extends Component {
  state = {
    albums: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      "https://itunes.apple.com/search?term=Queen&entity=album&limit=20"
    );

    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Albums />
      </div>
    );
  }
}

export default App;

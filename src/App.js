import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

class App extends Component {
  state = {
    albums: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://itunes.apple.com/search?term=Queen&entity=album&limit=20');

    console.log(res.data);
  }
  render() {
    return <div className="App">data:</div>;
  }
}

export default App;

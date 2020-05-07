import React, { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/search?term=Queen&entity=album&limit=20")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div className="App">
          {items.resultCount}
          {
            <ul>
              {items.results.map((item, index) => (
                <li key={index}>
                   {index+1}. Album: {item.collectionName} - Artist: {item.artistName}
                </li>
              ))}
            </ul>
          }
        </div>
      );
    }
  }
}

export default App;

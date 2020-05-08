import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    this.props.searchAlbums(this.state.text);
    this.setState({ text: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Buscar..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Buscar"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;

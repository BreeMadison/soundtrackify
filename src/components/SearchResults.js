import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    return this.props.results.map((result, i) => {
      return (
        <li key={i}>
          {result.name} by {result.artist.join(", ")}
        </li>
      );
    });
  }
}

export default SearchResult;

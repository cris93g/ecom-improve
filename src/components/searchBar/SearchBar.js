import React from "react";
import "./searchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["iphone", "imac", "dell", "xbox"];
    this.state = {
      suggestions: []
    };
  }

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions }));
  };

  renderSugestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <input onChange={this.onTextChanged} type="text" className="search" />
        {this.renderSugestions()}
      </div>
    );
  }
}

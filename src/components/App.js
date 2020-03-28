import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async searchText => {
    console.log(searchText);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

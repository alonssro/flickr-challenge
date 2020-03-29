import React, { Component } from 'react';
import SearchBar from './SearchBar';

import flickr from '../utils/api';

export default class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async text => {
    console.log(text);
    const { data: images } = await flickr.post('/photos', {
      text
    });
    this.setState({
      images
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

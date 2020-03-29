import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';
import flickr from '../utils/api';

export default class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async text => {
    const { data: images } = await flickr.post('/photos', {
      text
    });
    this.setState({
      images
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}

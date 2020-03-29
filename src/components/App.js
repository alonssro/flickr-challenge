import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';
import flickr from '../utils/api';

export default class App extends Component {
  state = {
    images: [],
    loading: false
  };

  onSearchSubmit = async text => {
    this.setState({ loading: true });
    const { data: images } = await flickr.post('/photos', {
      text
    });
    this.setState({
      images,
      loading: false
    });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} loading={loading} />
      </div>
    );
  }
}

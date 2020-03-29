import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';
import ChangeAspect from './changeAspect';
import flickr from '../utils/api';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    aspect: 'grid'
  };

  onChangeAspect = async () => {
    const { aspect } = this.state;
    if (aspect === 'grid') {
      this.setState({
        aspect: 'list'
      });
    } else {
      this.setState({
        aspect: 'grid'
      });
    }
  };

  onSearchSubmit = async text => {
    this.setState({ loading: true });
    try {
      const { data: images } = await flickr.post('/photos', {
        text
      });
      this.setState({
        images,
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { images, loading, aspect } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {images.length !== 0 ? (
          <ChangeAspect aspect={aspect} onChangeAspect={this.onChangeAspect} />
        ) : null}
        <ImageList aspect={aspect} images={images} loading={loading} />
      </div>
    );
  }
}

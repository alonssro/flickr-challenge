import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImagesList';
import ChangeAspect from './changeAspect';
import flickr from '../utils/api';

export default class App extends Component {
  state = {
    images: [],
    imagesFeed: [],
    loading: false,
    aspect: 'grid',
    isSearch: false
  };

  async componentDidMount() {
    let { data } = await flickr.get('/feed');
    this.setState({ images: data });
  }

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
    this.setState({ loading: true, isSearch: true });
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
    const { images, loading, aspect, isSearch } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {images.length !== 0 ? (
          <ChangeAspect aspect={aspect} onChangeAspect={this.onChangeAspect} isSearch={isSearch} />
        ) : null}
        <ImageList aspect={aspect} images={images} loading={loading} isSearch={isSearch} />
      </div>
    );
  }
}

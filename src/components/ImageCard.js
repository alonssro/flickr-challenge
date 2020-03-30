import React, { Component } from 'react';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { isSearch } = this.props;
    let farm, server, id, secret, title, link;
    if (isSearch) {
      ({ farm, server, id, secret, title } = this.props);
      const { spans } = this.state;

      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

      return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
          <img ref={this.imageRef} src={url} alt={title} />
        </div>
      );
    } else {
      ({ id, link, title } = this.props);
      const { spans } = this.state;
      return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
          <img ref={this.imageRef} src={link[1].href} alt={title} />
        </div>
      );
    }
  }
}

import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchText: ''
  };

  onClickSubmit = e => {
    const { onSubmit } = this.props;
    const { searchText } = this.state;
    e.preventDefault();
    onSubmit(searchText);
  };

  keyPress = e => {
    if (e.key === 'Enter') {
      const { searchText } = this.state;
      const { onSubmit } = this.props;
      onSubmit(searchText);
    }
  };
  render() {
    const { searchText } = this.state;

    return (
      <div
        className="ui segment basic grid"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 class="ui center aligned  header">Search. Find. Explore.</h2>
        <div className="ui action input huge six wide column" style={{ display: 'flex' }}>
          <input
            type="text"
            value={searchText}
            onKeyPress={this.keyPress}
            onChange={e => this.setState({ searchText: e.target.value })}
          />
          <button className="ui icon button huge" onClick={this.onClickSubmit}>
            <i aria-hidden="true" className="search icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

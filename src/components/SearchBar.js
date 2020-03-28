import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchText: ''
  };

  onFormSubmit = e => {
    const { onSubmit } = this.props;
    const { searchText } = this.state;
    e.preventDefault();
    onSubmit(searchText);
  };
  render() {
    const { searchText } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              value={searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

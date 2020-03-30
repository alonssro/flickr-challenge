import React, { Component } from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react';

export default class ChangeAspect extends Component {
  render() {
    const { aspect, onChangeAspect, isSearch } = this.props;
    return (
      <Segment
        basic
        padded
        size="tiny"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {isSearch ? <h1 class="ui header">Search</h1> : <h1 class="ui header">Public Feed</h1>}
        <Button icon onClick={() => onChangeAspect()}>
          {aspect === 'grid' ? <Icon name="th" /> : <Icon name="align justify" />}
        </Button>
      </Segment>
    );
  }
}

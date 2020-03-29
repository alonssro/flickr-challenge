import React, { Component } from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react';

export default class ChangeAspect extends Component {
  render() {
    const { aspect, onChangeAspect } = this.props;
    return (
      <Segment textAlign="right" basic padded size="tiny">
        <Button icon onClick={() => onChangeAspect()}>
          {aspect === 'grid' ? <Icon name="th" /> : <Icon name="align justify" />}
        </Button>
      </Segment>
    );
  }
}

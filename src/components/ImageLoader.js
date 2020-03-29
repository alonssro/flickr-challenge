import React from 'react';

import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const ImageLoader = () => {
  return (
    <div style={{ heigh: '200px', marginTop: '50px' }}>
      <Segment size="massive" basic>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Segment>
    </div>
  );
};

export default ImageLoader;

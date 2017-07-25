import React, { Component } from 'react';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  render () {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

export default PostContainer;

import React, { Component } from 'react';
import Posts from './Posts';
import data from './application-data';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }
  componentWillMount() {
    this.setState({comments: data});
  }

  render () {
    // console.log();
    return (
      <div> 
      hello from postscontainer
         <Posts data={this.state.comments}/> 
      </div>
    );
  }
}

export default PostContainer;

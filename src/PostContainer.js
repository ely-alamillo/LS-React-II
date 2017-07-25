import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from './application-data';
import './PostContainer.css';

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
    console.log();
    return (
      <Container className="post-container">
        <Row>
          <Col className="left-align" md="12">
            <img className="user-thumbnail" src={this.state.comments[0].thumbnailUrl} alt=""/> &nbsp;
            <h1 className="user-name">{this.state.comments[0].username}</h1>
          </Col>
        </Row>

        <Row>
  
        </Row>

        <Row>

        </Row>
      </Container>
    );
  }
}

export default PostContainer;

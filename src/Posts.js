// eslint-disable-next-line
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBlock,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from 'reactstrap';
  import CommentSection from './CommentSection'
import './PostContainer.css';
import moment from 'moment';
import ModalExample from "./Pop-Up"

const convertTime = (timestamp) => {
  let thisTime = moment(timestamp, "MMM D YYYY, h:mm:ss a").format();
  const time = (moment(thisTime).fromNow())
  return time;
};

const Posts = (props) => {
  // console.log('outside' + props.data);
  return (
    <div>
    {
      props.data.map((element, index) =>
        <Container key={index} className="post-container">
        <Container className="user-header">
          <Row key={index}>
            <Col key={index} className="left-align" md="12">
              <img key={index} className="user-thumbnail" src={element.thumbnailUrl} alt=""/> &nbsp;
              <h1 key={index + 1} className="user-name">{element.username}</h1>
            </Col>
          </Row>
        </Container>
          <Card key={index + 1}>
            <CardImg key={index} top width="100%" src={element.imageUrl} alt="Card image cap" />
            <CardBlock>
              <CardTitle key={index}>
                <i className="fa fa-heart-o comment-icons"></i>
                <i className="fa fa-comment-o comment-icons"></i>
              </CardTitle>
              <CardTitle key={index + 1}>
                <h6 className="likes">{element.likes} likes</h6>
              </CardTitle>

              <CommentSection comments={element.comments} />
              {/* {
                element.comments.map((comment, index) =>
                  <CardTitle key={index + 2}>
                    <p className="likes">
                      <h6>
                        <b>{comment.username}</b> &nbsp;
                        {comment.text}
                      </h6>
                    </p>
                  </CardTitle>
                )
              } */}


              <CardSubtitle key={index + 3}className="text-muted">
                {
                convertTime(element.timestamp)
                }
              </CardSubtitle>
              <hr key={index + 4} />
              <Form key={index + 5}>
                <FormGroup row key={index}>
                  <Col key={index} sm="9">
                    <Input  key={index + 1} className="comment-input" id="key" placeholder="Add a comment..." />
                  </Col>
                  <Col key={index + 1}sm="3">
                    <ModalExample key={index}/>
                    {/* <Button key={index} className="comment-button">...</Button> */}
                  </Col>
                </FormGroup>
              </Form>
            </CardBlock>
          </Card>
        </Container>
      )
    }
    </div>
  );
};


export default Posts;

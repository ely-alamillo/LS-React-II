// eslint-disable-next-line
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBlock,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from 'reactstrap';
import './PostContainer.css';

const Posts = (props) => {
  // console.log('outside' + props.data);
  return (
    <div>
    {
      props.data.map((element, index) =>  
        <Container key={index} className="post-container">
          <Row key={index}>
            <Col key={index} className="left-align" md="12">
              <img key={index} className="user-thumbnail" src={element.thumbnailUrl} alt=""/> &nbsp;
              <h1 key={index + 1} className="user-name">{element.username}</h1>
            </Col>
          </Row>
          <Card key={index + 1}>  
            <CardImg key={index} top width="100%" src={element.imageUrl} alt="Card image cap" />
            <CardBlock> key={index + 1}
              <CardTitle key={index}>
                <i className="fa fa-heart-o comment-icons"></i>
                <i className="fa fa-comment-o comment-icons"></i>
              </CardTitle>
              <CardTitle key={index + 1}>
                <h6 className="likes">{element.likes} likes</h6>
              </CardTitle>
              {
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
              }
              <CardSubtitle key={index + 3}className="text-muted">
                TIMESTAMP PLACEHOLDER
              </CardSubtitle> 
              <hr key={index + 4} />
              <Form key={index + 5}>
                <FormGroup row key={index}>
                  <Col key={index} sm="9">
                    <Input  key={index + 1} className="comment-input" id="key" placeholder="Add a comment..." />
                  </Col>
                  <Col key={index + 1}sm="3">
                    <Button key={index} className="comment-button">...</Button>
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


  // console.log(props.data)
  
          // <div>
          //   <Card>
          //     <CardImg top width="100%" src={this.state.comments[0].imageUrl} alt="Card image cap" />
          //     <CardBlock>
          //       <CardTitle>
          //         <i className="fa fa-heart-o comment-icons"></i>
          //         <i className="fa fa-comment-o comment-icons"></i>
          //       </CardTitle>
          //       <CardTitle>
          //         <h6 className="likes">{this.state.comments[0].likes} likes</h6>
          //       </CardTitle>
          //       <CardTitle>
          //         <p className="likes">
          //           <h6>
          //             <b>{this.state.comments[0].comments[0].username}</b> &nbsp;
          //             {this.state.comments[0].comments[0].text}
          //           </h6>
          //         </p>
          //       </CardTitle> 
          //       <CardSubtitle className="text-muted">
          //         TIMESTAMP PLACEHOLDER
          //       </CardSubtitle> 
          //       <hr/>
          //       <Form>
          //         <FormGroup row>
          //           <Col sm="9">
          //             <Input className="comment-input" id="key" placeholder="Add a comment..." />
          //           </Col>
          //           <Col sm="3">
          //             <Button className="comment-button">...</Button>
          //           </Col>
          //         </FormGroup>
          //       </Form>
          //     </CardBlock>
          //   </Card>
          // </div>
  //     </Container>
  // );

export default Posts;
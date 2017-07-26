import React, { Component } from 'react';
import { CardTitle, CardSubtitle, Form, FormGroup, Col, Button, Input  } from 'reactstrap';
import './PostContainer.css'

const handleChange = (event) => {

}
const CommentSection = (props) => {
  // console.log(props.comments.map((comment,index) => {
  //   console.log( comment.username);
  // }))
  return (
    // <div> hello </div>
    <div>
    {
      props.comments.map((comment, index) =>
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
  </div>
  )
}
export default CommentSection;

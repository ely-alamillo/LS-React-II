import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="4" className="left-align">
          <h1>Logo goes here</h1>
        </Col>
        <Col xs="4" className="centered">
          <form>
            <input type="search" placeholder="Search"/>
          </form>
        </Col>
        <Col xs="4" className="right-align">
          <i className="fa fa-heart-o fa-2x icon-margin"></i>
          <i className="fa fa-user-o fa-2x icon-margin"></i>
          <i className="fa fa-compass fa-2x icon-margin"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;

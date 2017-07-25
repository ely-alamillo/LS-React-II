import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <Container className="serach-container">
      <Row>
        <Col xs="4" className="left-align">
          <img className="insta-logo" src="https://static1.squarespace.com/static/5702c6265559868c7500f059/t/5810126215d5db24ca68240e/1477448293773/Instagram+Banner+White" alt="insta-logo"/>
        </Col>
        <Col xs="4" className="centered">
          <form>
            <input className="text-muted" type="search" placeholder="Search"/>
          </form>
        </Col>
        <Col xs="4" className="right-align">
          <i className="fa fa-compass fa-2x icon-margin"></i>
          <i className="fa fa-heart-o fa-2x icon-margin"></i>
          <i className="fa fa-user-o fa-2x icon-margin"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;

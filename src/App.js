import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;

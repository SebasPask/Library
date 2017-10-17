import React, { Component } from 'react';
import BookList from '../containers/book-list';
// import DvdList from '../containers/dvd-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <BookList/>
      </div>
    );
  }
}

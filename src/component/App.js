import '../App.css';
import BookList from '../containers/Listalibri';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <BookList />
      </div>
    );
  }
}

export default App;



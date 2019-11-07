import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Calculator from './Components/Calculator';
import PostBoard from './Components/Post-board';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row mb-5'>
          <div className='col-12'>
            <Header/>
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-3'>
            <Calculator/>
          </div>
          <div className='col-9'>
            <PostBoard/>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

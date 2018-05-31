import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'iphone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  componentWillMount() {
    const products = JSON.parse(localStorage.getItem('products'));
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
      </div>
    );
  }
}

export default App;

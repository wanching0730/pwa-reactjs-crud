import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductItem from './ProductItem';

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

  constructor(props) {
    super(props);

    this.state = {products: []};
  }

  componentWillMount() {
    this.getProducts();    
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <ProductItem 
                key={product.name}
                {...product}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

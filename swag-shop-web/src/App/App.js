import logo from './logo.svg';
import './App.css';
//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';
//Services
import HttpService from '../services/http-service';
import React, { useState } from 'react';

const http = new HttpService()

function App() {
  const [products, setStatus] = useState({products:[]});


  var loadData = () => {
    http.getProducts().then(products => {
        setStatus({products: products});
    }, err => {

    });
  }
  loadData()

  var productList = () => {
    const list = products.products.map((product) => 
    <div className="col-sm-4" key={product._id}>
      <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
    </div>
    );
    return (list);
  }
  
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
        <div className="container App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

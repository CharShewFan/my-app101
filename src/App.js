import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter  from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from "./views/About";
import Product from "./views/product"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link //link has a props : to ,send us to the link we want
}from "react-router-dom"; // avoid typing BrowserRouter by using this,just <Router/>



function App() {
  return (
    <div>


      <Router>
      <Header/>
      
      

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>          
        </Route>

        <Route path="/product">
          <Product></Product>
        </Route>

        <Route path={"/products/:id"} component={<Product/>}/>
        

      </Switch> 

      <Footer/>
      </Router>


      
    </div>
  );
};

export default App;

// app js just a component you could see it is exported to index.js to render to index.html


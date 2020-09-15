import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter  from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
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
          <h1>This is the homepage</h1>
        </Route>

        <Route path="/about">
          <h1>this is about page</h1>
        </Route>

      </Switch>

      <Footer/>
      </Router>


      
    </div>
  );
};

export default App;

// app js just a component you could see it is exported to index.js to render to index.html


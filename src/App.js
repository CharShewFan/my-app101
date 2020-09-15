import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter  from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header>
        
      </Header>
      <HelloWorld name="kevin"></HelloWorld>
      <Footer></Footer>
    <Counter>
    </Counter>
    </div>
  );
};

export default App;

// app js just a component you could see it is exported to index.js to render to index.html


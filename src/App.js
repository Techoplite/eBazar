import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Content />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;

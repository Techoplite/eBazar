import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="row" id="header">
        <Header />
      </div>
      <div className="row" id="content">
        <Content />
      </div>
      <div className="row" id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

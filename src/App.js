import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './components/Header.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;

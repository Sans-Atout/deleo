import React from 'react';
import './main-component/base.css';
import Header from './header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header hasButon={true}></Header>
        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;

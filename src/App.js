import React, { Component } from 'react';

import Header from './components/Header';
import Games from './components/Games';
import Providers from './components/Providers';
import Currency from './components/Currency';
import Footer from './components/Footer';

const App = () => (
  <div>
    <div className="helper">
      <Header />
      <main className="main">
        <div className="container">
          <Games />
          <Providers />
          <Currency />
        </div>
      </main>
    </div>
    <audio loop data-audio>
      <source src="../casino.mp3" type="audio/mpeg" />
    </ audio>
    <Footer />
  </div>
);

export default App;
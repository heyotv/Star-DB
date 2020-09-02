import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDeails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDeails />  
        </div> 
      </div>
    </div>
  );
}

export default App;
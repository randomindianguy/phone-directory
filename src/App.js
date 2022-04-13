import React, {Component} from 'react';
import Header from './Header';
import './App.css';
function App() {
  // let x = 2;
  // let y = 3;
  return (
    <div>
      <Header />
      <div className='component-body-container'>
        <button className='custom-btn add-btn'>Add</button>

        <div className='grid-container heading-container'>
          <span className='grid-item name-heading'>Name</span>
          <span className='grid-item phone-heading'>Name</span>
        </div>
      </div>
    {/* <label htmlFor="name">Name: </label>
    <input id="name" type="text" defaultValue={x+y} /> */}
    </div>
  );
}

export default App;

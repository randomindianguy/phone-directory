import React, {Component} from 'react';
import Header from './Header';

function App() {
  // let x = 2;
  // let y = 3;
  return (
    <div>
      <Header />
      <button>Add</button>
      <div>
        <span> Name </span>
        <br />
        <span> Phone </span>
      </div>
    {/* <label htmlFor="name">Name: </label>
    <input id="name" type="text" defaultValue={x+y} /> */}
    </div>
  );
}

export default App;

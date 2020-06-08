import React from 'react'
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Chicken Biryani" sweetDish="Kheer" />
      <Dinner dishName="Chicken karahi" sweetDish="gajar ka halwa" />
      <Dinner dishName="manchorian" sweetDish="custard" />
    </div>  
  );
}

export default App;

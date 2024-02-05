import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor] = useState("red");
  return (
      <> <h1> this is my title...{color}</h1></>
  );
}

export default App;

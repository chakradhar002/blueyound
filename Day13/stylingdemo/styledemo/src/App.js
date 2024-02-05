import logo from './logo.svg';
import './App.css';

function App() {

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  
  return (
    
    <>
    <h1 style={{color: "red"}}>Hello Style!</h1>
      <p  style={myStyle}  >Add a little style!</p>
    </>
  );
}

export default App;


import { useRef } from 'react';
import User from './User';

function App() {
  
   let inputRef = useRef(null);

  function  updateInpute(){
   inputRef.current.value="1000";
   inputRef.current.style.color="red";
   inputRef.current.focus();

  }

   return(
   <><div className='App'>
    <h1> forwardRed in react</h1>
    <User ref={inputRef}/>
    <button onClick={updateInpute}>Update Input Box</button>
   </div>
   </>


   )};

export default App;

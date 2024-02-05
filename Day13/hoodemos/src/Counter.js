import React,{ComponentElement,useState,useEffect}  from 'react';

function Counter(){
  const [count,setCount] = useState(0);
  const incrementCount = () => setCount(count+1);

  useEffect(()=>{
     document.title ='you clicked ${count} times'
  });

  return (
 <>
       <div>
       <p> your clicked {count} times </p>
       <button onClick={incrementCount}> clicked me</button>
       </div>
 </>
  )}

  export default Counter;
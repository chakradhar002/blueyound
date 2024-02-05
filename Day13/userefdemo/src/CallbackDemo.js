import React, { useState, useCallback } from 'react';
// dashboard
const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  // useCallback to memoize the callback function
  const handleCallback = useCallback((data) => {
    setDataFromChild(data);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent callback={handleCallback} />
      
      {dataFromChild && <p>Data from Child: {dataFromChild}</p>}
    </div>
  );
};



// this is  mobile
const ChildComponent = ({ callback }) => {
  
  //api
  const sendDataToParent = () => {
    // Simulating asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const data = 'Hello from Child!';
      // this data is coming from backend
      // Invoke the memoized callback to send data to the parent
      callback(data);
    }, 1000);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default ParentComponent;

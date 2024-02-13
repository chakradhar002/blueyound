import React from 'react'
import {useSelector} from 'react-redux';



function profile() {


    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{color :colortheme}}>

        <h2>profile page</h2>
        <p> name:{user.name}</p>
        <p> age:{user.age}</p>
        <p> email:{user.email}</p>


      
    </div>
  )
}

export default profile;

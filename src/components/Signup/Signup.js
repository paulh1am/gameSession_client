import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './Signup.css';

export const Signup = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  

  function handleSignupClick(event){
    
    event.preventDefault();
    console.log("sending");

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    }).then(history.push("/"))


  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        
          <form onSubmit={name? handleSignupClick: null} >
            <button className={'button mt-20'} type="submit">Sign up</button>
          </form>
        
      </div>
    </div>
  );
}
import React, { useState } from 'react';

function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    }).then(res => res.text()).then(console.log)
    // console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input 
          type="text" 
          value={email} 
          onChange={e=>setEmail(e.target.value)}/>
      </label>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={e=>setName(e.target.value)}/>
      </label>
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={e=>setPassword(e.target.value)}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Register;
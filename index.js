import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');

  const handleSubmit = () => {
    // Add your logic for handling form submission here
    console.log('Submitted:', { username, password, key });
  };

  return (
    <div className="Login">
      <h1 style={{ textAlign: 'center', fontSize: '45px' }}>
        Your Login Will Be Saved So Either Save It On A .TXT File Or Write It Down
      </h1>

      <input
        type="text"
        placeholder="ENTER USERNAME"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: 'block', margin: '0 auto', width: '250px' }}
      />
      <p></p>
      <input
        type="password"
        placeholder="ENTER PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '0 auto', width: '250px' }}
      />
      <p></p>
      <input
        type="text"
        placeholder="ENTER KEY"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ display: 'block', margin: '0 auto', width: '250px' }}
      />
      <p></p>
      <button onClick={handleSubmit} style={{ display: 'block', margin: '0 auto', borderRadius: '12px', backgroundColor: 'white', color: 'black', border: '2px solid #04AA6D', width: '250px' }}>
        Submit
      </button>

      <h2 style={{ textAlign: 'center', fontSize: '45px' }}>
        Any attempts on sharing key or revealing website to anyone will result in either a temporary or permanent ban
      </h2>
    </div>
  );
};

export default LoginForm;

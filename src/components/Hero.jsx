// Hero.jsx
import React from 'react';

const Hero = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h2>Welcome to our website</h2>
      {isLoggedIn ? <p>You are logged in.</p> : <p>Please log in to access more features.</p>}
    </div>
  );
};

export default Hero;

// SignInPage.js

import React from 'react';
import Header from './Header'; // Import the Header component
import Login from './Login'; // Import the LoginForm component

const SignIn = () => {
  return (
    <div>
      <Header /> {/* Render the header with no sign-in button */}
      <Login /> {/* Render the sign-in form */}
    </div>
  );
};

export default SignIn;

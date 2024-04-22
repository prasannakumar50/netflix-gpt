

import React from 'react';
import Header from './Header';
import Login from './Login'; // Import the LoginForm component

const SignUpFormPage = () => {
  return (
    <div>
      <Header showButtons={true} />
        <Login isSignUp={true} />
      </div>
    
  );
};

export default SignUpFormPage;


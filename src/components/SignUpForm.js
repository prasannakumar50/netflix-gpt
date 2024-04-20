import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

const SignUpForm = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGetStartedClick = () => {
    navigate('/signupform'); // Navigate to the signup form route
  };

  return (
    <div>
      <Header showButtons={true} /> {/* You may need to pass additional props */}
      {/* Your existing signup page content */}
      <button onClick={handleGetStartedClick}>Get Started</button>
      <div>
        Already have an account? <Link to="/signupform">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;

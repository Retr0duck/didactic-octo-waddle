// SignupComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupRequest } from '/store/actions.js';

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupRequest(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupComponent;

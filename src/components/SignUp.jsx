import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../auth/signup';

function SignUp() {
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    tosAgreement: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, tosAgreement } = state;
    if (
      username.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      onsubmit = false;
      setMessage('Please fill out all fields!');
    } else if (password !== confirmPassword) {
      onsubmit = false;
      setMessage('password mismatch!');
    } else if (tosAgreement === false) {
      onsubmit = false;
      setMessage('please agree to the terms of use!');
    } else {
      signupUser(state);
    }
  };

  return (
    <>
      <section className="sign-section">
        <h1 className="logo">Noted</h1>
        <h1>Sign Up</h1>
        <form className="sign-form">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="tosAgreement"
              checked={state.tosAgreement}
              onChange={handleChange}
            />
            I accept the Terms of Use and Privacy Policy
          </label>
          <button className="button" type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
          {message && <p className="error-msg">{message}</p>}
          <small>
            Already have an account?{' '}
            <strong>
              <Link to="/sign-in">Sign In</Link>
            </strong>
          </small>
        </form>
      </section>
    </>
  );
}

export default SignUp;

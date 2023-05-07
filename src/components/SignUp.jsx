import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../redux/authSlice';


function SignUp() {
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    tosAgreement: false,
  });

  const [message, setMessage] = useState('');
  const dispacth = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error)
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, tosAgreement } = state;
    if (
      username.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setMessage('Please fill out all fields!');
    } else if (password !== confirmPassword) {
      setMessage('password mismatch!');
    } else if (tosAgreement === false) {
      setMessage('please agree to the terms of use!');
    } else {
      setMessage('');
      const actionResult = await dispacth(signUp(state));
        if(error){
          setMessage(error);
        }
        else{
          const userData = actionResult.payload;
          navigate('/todos', {state: userData});
        }
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
          <button disabled={isLoading} className="button" type="submit" onClick={handleSignUp}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
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

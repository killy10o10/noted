import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInUser } from '../auth/signin';

function SignIn() {
  const navigate = useNavigate()
  
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value} = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]:  value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = state;
    if (
      username.length === 0 &&
      password.length === 0 
    ) {
      onsubmit = false;
      setMessage('Please provide a username and password!');
    } else if (!password) {
      onsubmit = false;
      setMessage('Please provide a password!');
    } else if (!username) {
      onsubmit = false;
      setMessage('please provide a username!');
    } else {
        try {
          const response = await signInUser(state);
          console.log(response)
          if(response.token) {
            setMessage('')
            localStorage.setItem('token', response.token)
            navigate('/todos')
          }
          else {
            setMessage('Invalid username or password!')
          }
          
        } catch (error) {
          setMessage('An error occured!');
        }
    }
  };
  return (
    <>
      <section className="sign-section">
        <h1 className="logo">Noted</h1>
        <h1>Sign In</h1>
        <form className="sign-form">
          <input type="text" placeholder="Username" name="username" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <button type='submit' className="button" onClick={handleSignIn}>Sign In</button>
          {message && <p className="error-msg">{message}</p>}
          <small>
            Don&apos;t have an account?{' '}
            <strong>
              <Link to="/sign-up">Sign Up</Link>
            </strong>
          </small>
        </form>
      </section>
    </>
  );
}

export default SignIn;

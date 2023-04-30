import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <section className="sign-section">
        <h1>Sign In</h1>
        <form className="sign-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link className="button">Sign In</Link>
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

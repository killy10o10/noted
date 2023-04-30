import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <section className="sign-section">
        <h1>Sign Up</h1>
        <form className="sign-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <label>
            <input type="checkbox" name="tos" id="tos" />
            I accept the Terms of Use and Privacy Policy 
          </label>
          <Link className="button">Sign Up</Link>
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

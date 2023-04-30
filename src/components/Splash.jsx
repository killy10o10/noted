import { Link } from 'react-router-dom';
import splashImg from '../assets/images/splash_image.svg';

export default function Splash() {
  return (
    <>
      <section className="splash-section flex-col-center">
        <h1 className="logo">Noted</h1>
        <div className="splash-content flex-col-center">
          <img src={splashImg} alt="welcome" />
          <h3>Welcome to Noted</h3>
          <p>
            Noted is a comprehensive task management tool with the ability to
            create, organize, and manage tasks. Users can add a task
            description, set a due date, assign a priority level, and track the
            status of each task.
          </p>
          <Link to="sign-in" className='button'>Get Started</Link>
        </div>
      </section>
    </>
  );
}

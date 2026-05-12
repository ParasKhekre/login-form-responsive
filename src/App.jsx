import { LockClosedIcon, UserIcon } from "@heroicons/react/16/solid";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Login Form</span>
        </div>
        <form action="#">
          <div className="row">
            <span className="icon-container">
              <UserIcon className="icon user" />
            </span>
            <input type="text" placeholder="Email or Phone" required />
          </div>

          <div className="row">
            <span className="icon-container">
              <LockClosedIcon className="icon lock" />
            </span>

            <input type="password" placeholder="Password" required />
          </div>

          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member?
            <a href="#"> Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

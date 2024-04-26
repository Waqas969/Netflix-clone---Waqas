import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
const Login = () => {
  const [signState, setSignSatte] = useState("Sign In");
  return (
    <div className="login">
      <img src={Logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            ""
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignSatte("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignSatte("Sign In")}>Sign In Now</span>
            </p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;

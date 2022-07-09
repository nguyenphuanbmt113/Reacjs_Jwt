import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  let history = useHistory();
  const handleNewAccount = () => {
    history.push("/register");
  };
  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center px-2 px-ms-0">
          <div className=" content-left col-sm-7 d-sm-block d-none col-sm-7 d-sm-block">
            <div className="brand">FaceBook</div>
            <div className="detail">
              FaceBook heapls you connect and share with peope in your life
            </div>
          </div>
          <div className=" content-right shadow-sm col-12 px-3 col-sm-5  d-flex flex-column gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn-primary text-center p-2">Login</button>
            <span className="text-center">
              <a href="#home" className="forgot-password">
                Forgot your password
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn-success p-2 rounded"
                onClick={() => handleNewAccount()}>
                Create new Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

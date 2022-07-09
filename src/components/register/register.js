import React from "react";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
const Register = () => {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
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
              placeholder="Email address"
            />
            <input
              type="text"
              className="form-control"
              placeholder="phone number"
            />
            <input
              type="text"
              className="form-control"
              placeholder="User name"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <input
              type="password"
              className="form-control"
              placeholder="re-type Password"
            />
            <span className="text-center">
              <a
                href="#home"
                className="forgot-password"
                onClick={() => handleLogin()}>
                Already have account
              </a>
            </span>
            <button className="btn-primary text-center p-2">Register</button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

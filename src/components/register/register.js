import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const isValidInputs = () => {
    if (!email) {
      toast.error("email is requied");
      return false;
    }
    let regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      toast.error("please an valid email");
      return false;
    }
    if (!phone) {
      toast.error("phone is requied");
      return false;
    }
    if (!username) {
      toast.error("username is requied");
      return false;
    }
    if (!password) {
      toast.error("username is requied");
      return false;
    }
    if (password !== repassword) {
      toast.error("your password is no the same");
      return false;
    }
    return true;
  };
  const handleRegister = () => {
    //sau khi nhan register i get data->check validate
    toast("ez backend");
    //check validinput
    isValidInputs();
    let userData = { email, phone, username, password, repassword };
    console.log(">>>check uesrdata: ", userData);
  };
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  useEffect(() => {
    axios.get("http://localhost:8070/api").then((data) => {
      console.log(">>>>>>>check data: ", data);
    });
  }, []);
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
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="form-control"
              placeholder="phone number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              className="form-control"
              placeholder="User name"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className="form-control"
              placeholder="re-type Password"
              name="retypePassword"
              onChange={(e) => setRePassword(e.target.value)}
              value={repassword}
            />
            <span className="text-center">
              <a
                href="#home"
                className="forgot-password"
                onClick={() => handleLogin()}>
                Already have account
              </a>
            </span>
            <button
              className="btn-primary text-center p-2"
              onClick={() => handleRegister()}>
              Register
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

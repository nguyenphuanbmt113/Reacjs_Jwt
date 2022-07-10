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
  const defaulValid = {
    isValidEmail: true,
    isValidPhone: true,
    isValidUsername: true,
    isValidPassword: true,
    isValidRePassword: true,
  };
  const [objCheckValid, setObjCheckValid] = useState(defaulValid);
  const isValidInputs = () => {
    setObjCheckValid(defaulValid);
    if (!email) {
      setObjCheckValid({ ...objCheckValid, isValidEmail: false });
      toast.error("email is requied");

      return false;
    }
    let regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      setObjCheckValid({ ...objCheckValid, isValidEmail: false });
      toast.error("please an valid email");
      return false;
    }
    if (!phone) {
      setObjCheckValid({ ...objCheckValid, isValidPhone: false });
      toast.error("phone is requied");
      return false;
    }
    if (!username) {
      setObjCheckValid({ ...objCheckValid, isValidUsername: false });
      toast.error("username is requied");
      return false;
    }
    if (!password) {
      setObjCheckValid({ ...objCheckValid, isValidPassword: false });
      toast.error("username is requied");
      return false;
    }
    if (password !== repassword) {
      setObjCheckValid({ ...objCheckValid, isValidRePassword: false });
      toast.error("your password is no the same");
      return false;
    }
    return true;
  };
  const handleRegister = () => {
    //sau khi nhan register i get data->check validate
    //check validinput
    let check = isValidInputs();
    if (check === true) {
      axios.post("http://localhost:8070/api/v1/register", {
        email,
        phone,
        username,
        password,
      });
    }
  };
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  useEffect(() => {
    // axios.post("http://localhost:8070/api/v1/test-api").then((data) => {
    //   console.log(">>>>>>>check data: ", data);
    // });
    // axios.post("http://localhost:8070/api/v1/register", {
    //   email,
    //   phone,
    //   username,
    //   password,
    // });
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
              className={
                objCheckValid.isValidEmail
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className={
                objCheckValid.isValidPhone
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="phone number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              className={
                objCheckValid.isValidUsername
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="User name"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              className={
                objCheckValid.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className={
                objCheckValid.isValidRePassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
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

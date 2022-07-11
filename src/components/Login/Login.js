import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserService } from "../services/useServices";
import "./Login.scss";
const Login = () => {
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaulObjValid = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objValid, setObjValid] = useState(defaulObjValid);
  let history = useHistory();
  const handleNewAccount = () => {
    history.push("/register");
  };
  //validdtion ở frondend cho nó không rôngz là đc
  const isValidLogin = () => {
    setObjValid(defaulObjValid);
    if (!valueLogin) {
      toast.error("valuelogin is requied");
      setObjValid({ ...defaulObjValid, isValidValueLogin: false });
      return false;
    }
    if (!password) {
      toast.error("password is requied");
      setObjValid({ ...defaulObjValid, isValidPassword: false });
      return false;
    }
    return true;
  };
  const handleLoginAccount = async () => {
    await isValidLogin(); //check validation
    const response = await loginUserService(valueLogin, password); //send data to server/rồi data se tra ra
    // alert("hahah");
    console.log(">>>>>>>check response: ", response.data);
    if (response && response.data && response.data.EC === 0) {
      let data = {
        isAuthenticated: true,
        token: "fake token",
      };
      sessionStorage.setItem("account", JSON.stringify(data));
      history.push("/users");
    }
    if (response && response.data && response.data.EC !== 0) {
      toast.error(response.data.EM);
    }
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
              className={
                objValid.isValidValueLogin
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email address or phone number"
              value={valueLogin}
              onChange={(e) => setValueLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className={
                objValid.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn-primary text-center p-2"
              onClick={() => handleLoginAccount()}>
              Login
            </button>
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

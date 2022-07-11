import axios from "axios";
const registerNewUser = (email, phone, username, password) => {
  return axios.post("http://localhost:8070/api/v1/register", {
    email,
    phone,
    username,
    password,
  });
};
const loginUserService = (valueLogin, password) => {
  return axios.post("http://localhost:8070/api/v1/login", {
    valueLogin,
    password,
  });
};
export { registerNewUser, loginUserService };

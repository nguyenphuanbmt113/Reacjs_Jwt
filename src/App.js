import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Nav from "./components/navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/news">news</Route>
          <Route path="/contact">contact</Route>
          <Route path="/about">about</Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/" exact>
            <img
              src="https://images7.alphacoders.com/124/thumbbig-1242791.webp"
              alt=""
            />
          </Route>
          <Route path="*">404 not fou</Route>
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}

export default App;

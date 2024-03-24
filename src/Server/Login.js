import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes

const Login = ({ setIsLoggedIn }) => {
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: emailUsername,
        password: password,
      });
      setMsg(response.data.msg);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="emailUsername" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailUsername"
                    placeholder="Email"
                    value={emailUsername}
                    onChange={(e) => setEmailUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="text-center mt-3">{msg}</p>
                <p className="text-center mt-3">
                  Tidak punya akun?, Buatlah{" "}
                  <Link to="/register">here</Link>
                </p>
                  {/* <Link to="/forgot-password">Forgot Password?</Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Prop validation
Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;

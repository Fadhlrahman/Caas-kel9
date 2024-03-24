import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        phoneNumber: phone,      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card mt-5">
            <div className="card-body">
              <p className="has-text-centered">{msg}</p>
              <h5 className="card-title text-center">Register</h5>
              <form onSubmit={Register}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confPassword" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success">Register</button>
                </div>
              </form>
              <p className="text-center mt-3">
                Sudah Punya Akun? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

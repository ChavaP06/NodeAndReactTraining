import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {

  const doLogin = async () => {
    if (username === "" || password === "") {
      alert("Please input data.")
      return
    }
    let result = await axios.post(
      "http://localhost:4000/api/login",
      { username: username, password: password }
    )
    if (result.data === "OK") {
      alert("User has successfully logged in!");
      localStorage.setItem("LOGGED_IN", "TRUE")
      window.location.reload()
    } else {
      alert(result.data)
    }
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="content-wrapper" style={{ marginLeft: 0 }}>
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo"></div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <h1 className="login-box-msg">Login</h1>
              <p className="login-box-msg">Please Log-in</p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>
                {/* /.col */}
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => {
                      e.preventDefault();
                      doLogin();
                    }}
                  >
                    Log In
                  </button>
                </div>
                {/* /.col */}
              </div>

              <p className="mb-0">
                <a href="/register" className="text-center">
                  Register a new user
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login


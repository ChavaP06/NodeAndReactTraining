import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const Registration = async () => {

        if (username === "" || password === "" || email === "") {
            alert("Please input data.")
            return
        }

        if (password === confirmPassword) {
            let data = {
                username: username,
                password: password,
                email: email
            }
            let result = await axios.post("http://localhost:4000/api/insertEmployee", data)
            alert(result.data)
        } else {
            alert("Password does not match!")
        }

    }

    return (
        <div className="content-wrapper" style={{ marginLeft: 0 }}>

            <div className="register-page" >
                <div className="register-box">
                    <div className="register-logo"></div>
                    {/* /.register-logo */}
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="register-box-msg">New User Registration</p>

                            <div className="input-group mb-3">
                                <input
                                    id="Username"
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    autoFocus
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    id="Password"
                                    type="text"
                                    className="form-control"
                                    placeholder="Password"
                                    autoFocus
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    id="ConfirmPassword"
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirm-Password"
                                    autoFocus
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value)
                                    }}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    id="Email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    autoFocus
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-id-card" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <a href="/login">I have an account.</a>
                                    </div>
                                    {/* </li> */}
                                </div>
                                {/* /.col */}

                                <div className="col-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            Registration()
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-block"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
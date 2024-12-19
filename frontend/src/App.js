import React from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Graph from "./components/Graph"

import Header from "./pages/Header"
import Menu from "./pages/Menu"
import Footer from "./pages/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Register from "./components/Register"
import Graph_2 from "./components/Graph_2"
import EmployeeList from "./components/EmployeeList"

const CheckLoggedIn = () => {
  if (localStorage.getItem("LOGGED_IN") != null) {
    return (
      <Router>
        <div class="wrapper">
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Home />}></Route>
            <Route path="/graph" element={<Graph />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/graph_2" element={<Graph_2 />}></Route>
            <Route path="/employee" element={<EmployeeList />}></Route>
          </Routes>
          <Footer />
        </div>

      </Router>
    )
  } else {
    return (
      <Router>
        <div class="wrapper">
          <Routes>
            <Route path="*" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>)
  }
}

function App() {
  return (CheckLoggedIn());
}

export default App;

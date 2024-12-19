import React from 'react'

const LogoutBtn = () => {
  return (
    <>
      <li className="nav-item">

        <div className="nav-link" role="button"
          onClick={() => {
            localStorage.removeItem("LOGGED_IN")
            alert("Logout Successfully!")
            window.location.reload();
          }}>
          <a href="/login" className="text-center">
            <b>Logout</b>
          </a>

        </div>
      </li>
    </>
  )
}

export default LogoutBtn


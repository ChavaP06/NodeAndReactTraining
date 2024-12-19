import React from 'react'

const Menu = () => {
    return (
        <>
          <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
            {/* Brand Logo */}
            <a href="/" className="brand-link">
              <div className="d-flex justify-content-center">
                {/* <i className="nav-icon fa fa-cog fa-fw " aria-hidden="true" /> */}
                <span
                  className="brand-text font-weight-light "
                  style={{ fontWeight: "bold", fontStyle: "italic" }}
                >
                  Web Application
                </span>
              </div>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex justify-content-center">
                <div style={{ color: "white", fontWeight: "bold" }}>
                  Machine Control
                </div>
              </div> */}
   
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <a href="/home" className="nav-link">
                      {/* <i className="nav-icon fas fa-copy" /> */}
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/graph" className="nav-link">
                      {/* <i className="nav-icon fas fa-copy" /> */}
                      <p>Graph</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/graph_2" className="nav-link">
                      {/* <i className="nav-icon fas fa-copy" /> */}
                      <p>Graph 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/employee" className="nav-link">
                      {/* <i className="nav-icon fas fa-copy" /> */}
                      <p>Employee List</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
        </>
      );
}

export default Menu


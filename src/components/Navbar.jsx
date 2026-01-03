import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">My Website</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-item" to="/">Home</Link>
              <Link className="nav-item" to="/about">About</Link>
              <Link className="nav-item" to="/service">Service</Link>
              <Link className="nav-item" to="/contact">Contact</Link>
              <Link className="nav-item" to="/register">Register</Link>
              <Link className="nav-item" to="/login">Login</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
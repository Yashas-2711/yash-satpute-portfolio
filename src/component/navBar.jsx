import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>Yash Satpute</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}

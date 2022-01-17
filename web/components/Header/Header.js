import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./header.scss"

const Header = () => {
  return (
    <div className="header-container">
      <Link className="" to="/">
        <div className="logo-container">
          <img className="logo" src={logo} />
          <p>RandoVision</p>
        </div>
      </Link>

      <div className="links_container">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/dvds">
          List
        </Link>
      </div>
    </div>
  )
}

export default Header

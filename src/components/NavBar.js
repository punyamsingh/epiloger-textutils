import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
            <div className="container-fluid">
                <img src="./logo192.png" alt="" width={40} height={38} style={{ margin: "0px 5px 0px 5px" }} />
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex me-5" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Go Dark ' : 'Go Light'}</label> */}
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Go ${props.mode === 'light' ? 'Dark ' : 'Light'}`}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import "./Com.css"

const Header = () => {
    return (
        <>
            <header>

                <nav className="navbar navbar-dark px-5 p-3" style={{ 'backgroundColor': '#000000' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" >
                            <span className='planet'>Movie Planet</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link">Link</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
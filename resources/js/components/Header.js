import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
        <div className="container">
            <Link className="navbar-brand" to="/">
                Laravel React
            </Link>
        </div>

        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/example">
                        Example
                    </Link>
                </li>
                <li>
                    <a
                        className="nav-link"
                        href="https://github.com/PJijin/Laravel-React-Starter"
                        taget="_BLANK">
                        <i className="fab fa-github" />
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;

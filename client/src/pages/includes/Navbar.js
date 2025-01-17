import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'


class Navbar extends React.Component {

  render() {
    const { match, location } = this.props;
    console.log(match);
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          {/* <a className="navbar-brand" href="/">
            Navbar w/ text
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/lesson"
                  className={
                    location.pathname.includes("/lesson")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="fas fa-graduation-cap"></i> Lessons
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about/"
                  className={
                    location.pathname.includes("/about/")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="fas fa-info-circle"></i> About Us
                </Link>
              </li>
              <li
                className={
                  sessionStorage.getItem("isAuthorized") ? "nav-item" : "d-none"
                }
              >
                <Link
                  to="/user"
                  className={
                    location.pathname.includes("/user")
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i className="fas fa-user"></i> Profile
                </Link>
              </li>
            </ul>
            {/* <span className="navbar-text">
              Navbar text with an inline element
            </span> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

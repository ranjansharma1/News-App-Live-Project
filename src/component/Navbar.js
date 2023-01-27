import React, { Component } from "react";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Monkey-News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  business
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  entertainment
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  general
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  health
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  science
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  sports
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;

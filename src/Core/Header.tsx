import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Nienna Counseling
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto"> {/* Use 'ml-auto' to push items to the right */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Meet the Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Insurance
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 m-1">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Book Now
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;

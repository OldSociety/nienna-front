import React from 'react';

function Footer() {
  return (
    <footer>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container">
          <div className="row">
            <p className="col-12">
              If you or someone you know is experiencing an emergency or crisis and needs immediate help, call 911 or go to the nearest emergency room. Here are some additional crisis resources.
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              @2023 Nienna Counseling
            </div>
            <div className="col-6">
              support@niennacounseling.com
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

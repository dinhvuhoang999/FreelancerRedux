import React from 'react';

import './style.css';

const Footer = () => (
  <>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4 p-0">Location</h4>
            <p className="lead mb-0 p-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-1">Around the Web</h4>
            <i className="f fab fa-facebook-f" />
            <i className="f fab fa-twitter" />
            <i className="f fas fa-info" />
            <i className="f fas fa-globe" />
          </div>

          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4 p-0">About Freelancer</h4>
            <p className="lead mb-0 p-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a href="http://startbootstrap.com">Start Bootstrap</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright py-4 text-center text-white">
      <div className="container"><small>Copyright © Your Website 2020</small></div>
    </div>
  </>
);
export default Footer;

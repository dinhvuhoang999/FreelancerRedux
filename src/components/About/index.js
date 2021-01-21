import React from 'react';
import Hero from '../Hero';

import './style.css';

const About = () => (

  <Hero>
    <div className="container d-flex align-items-center flex-column" id="ABOUT">
      <h1 className="title">About</h1>
      <i className="fas fa-star" />
      <div className="row">
        <div className="col-6">
          <p>
            Freelancer is a free bootstrap
            theme created by Start
            Bootstrap. The download
            includes the complete source
            files including HTML, CSS, and
            JavaScript as well as optional
            SASS stylesheets for easy
            customization.
          </p>
        </div>

        <div className="col-6">
          <p>
            You can create your own
            custom avatar for the
            masthead, change the icon in
            the dividers, and add your
            email address to the contact
            form to make it fully
            functional!
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light mb-5" href="wq">
          <i className="fas fa-download" />
          Free Download
        </a>
      </div>
    </div>
  </Hero>
);
export default About;

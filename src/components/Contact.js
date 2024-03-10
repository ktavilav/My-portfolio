// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="section contact" id="contact">
      <div id="map" className="map"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              <form action="">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name *" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message *" rows="7" required></textarea>
                </div>
                <div className="form-group ">
                  <button type="submit" className="form-control btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"></i>
                </div>
                <div className="col-10 ">
                  <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (313) 2289883</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Address :<br /> <span className="text-muted">calle 87 # 103 f 50 cs 94 Colombia.</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email :<br /> <span className="text-muted">katerineavila@hotmail.com</span></h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
                  <li className="social-item">
                    <a className="social-link" href="https://github.com/ktavilav" target="_blank" rel="noopener noreferrer">
                      <i className="ti-github" aria-hidden="true"></i> 
                      <span style={{ color: 'black' }}></span>
                    </a>
                  </li>
                  <li className="social-item">
                    <a className="social-link" href="https://www.linkedin.com/in/katherine-avila-viatela/" target="_blank" rel="noopener noreferrer">
                      <i className="ti-linkedin" aria-hidden="true"></i> 
                      <span style={{ color: 'black' }}></span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

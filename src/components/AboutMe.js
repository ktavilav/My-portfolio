// src/components/AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Who am I ?</h3>
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            className="w-full h-auto"
            src={process.env.PUBLIC_URL + '/img/perfil.jpg'}
          />
          <span className="line mb-5"></span>
          <h5 className="mb-3">A Web Designer / Developer Located In Our Lovely Earth</h5>
          <p className="mt-20">Innovative web developer with organizational and multitasking skills, specialized in creating web solutions and application designs for demanding clients. Additionally, I have experience as a Scrum Master, leading teams in the effective implementation of Scrum and excelling in user story management. I am looking for a position in a modern company where I can apply my experience in web development and Scrum Master, contributing to the success of challenging projects.</p>
          <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Personal Info</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled">
            <li><span>Birthdate</span> : 11/02/1991</li>
            <li><span>Email</span> : katerineavila@hotmail.com</li>
            <li><span>Phone</span> : + (313)2289883</li>
            <li><span>Address</span> : calle 87 # 103 f 50 cs 94</li>
          </ul>
          <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link" target='_blank' href="https://www.linkedin.com/in/katherine-avila-viatela/"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link" target='_blank' href="https://github.com/ktavilav"><i className="ti-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">My Expertise</h3>
          <span className="line mb-5"></span>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>UX Design</h6>
              <p className="subtitle">The user experience (UX) and user interface (UI) must be intuitive and attractive, facilitating navigation and user interaction with the digital product to maximize satisfaction and effectiveness. A user-centered design, with a clear and functional interface, promotes a fluid and memorable experience that generates trust and loyalty towards the product.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p className="subtitle">As a front-end developer it involves creating interactive and visually appealing user interfaces, using technologies such as HTML, CSS and JavaScript to bring innovative and functional designs to life. Close collaboration with backend designers and developers ensures the delivery of high-quality web products that meet the needs and expectations of end users.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>Scrum Master</h6>
              <p className="subtitle">I have led agile teams in the delivery of software products, fostering collaboration, transparency and continuous improvement to achieve project objectives efficiently. My focus is on removing obstacles, facilitating meetings, and promoting the adoption of agile practices to maximize team productivity and satisfaction.</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

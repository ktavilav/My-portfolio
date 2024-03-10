// src/components/Resume.jsx

import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Expertise</h4>
                  <span className="line"></span>  
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2021 - 2022</h6>
                <p>web developer and scrum master junior</p>
                <p>Freelance as project management leader | united nations program</p>
                <p className="subtitle">As a Scrum Master and web developer, I coordinated the development team in the implementation of projects, leading the migration of a mobile application to a web version using the MWC architecture pattern. Additionally, I was in charge of developing responsive views of the application and connecting the application to an asmx server with SOAP, using tools such as the Bootstrap framework to achieve a professional and functional design.</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Education</h4>
                  <span className="line"></span>  
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2018 - 2024</h6>
                <p>Systems engineer</p>
                <p className="subtitle">University Nacional abierta y a distancia - UNAD</p>
                <hr />
                <h6 className="title text-danger">2022- 2024</h6>
                <p>Certified Tech Developer</p>
                <p className="subtitle">Digital House</p>
                <hr />
                <h6 className="title text-danger">2022 - 2022</h6>
                <p>Scrum professional course</p>
                <p className="subtitle">Platzi</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Skills</h4>
                  <span className="line"></span>  
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>HTML5 & CSS3</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '97%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>JavaScript</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>PHP</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>SQL</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>react js</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>node js</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Languages</h4>
                  <span className="line"></span>  
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>English</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Spanish</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

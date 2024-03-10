import React from 'react';

const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">My</span> projects</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-vector text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">The project "The Best Animated Series of All Time"</h5>
                <p className="subtitle"> Is an interactive platform that presents viewers with the most popular animated series, according to the opinion of the community on social networks. Developed using React, this website offers a dynamic and easy-to-use experience.</p>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  className="w-full h-auto"
                  src={process.env.PUBLIC_URL + '/img/series.jpg'}
                />
                <p>
                  <li className="social-item">
                    <a className="social-link" href="https://github.com/ktavilav/react_counter" target="_blank" rel="noopener noreferrer">
                      <i className="ti-github" aria-hidden="true"></i> 
                      <span style={{ color: 'black' }}> Repositorio en GitHub</span>
                    </a>
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-write text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">The project "Dragon Ball Character Carousel in Taiwil and React"</h5>
                <p className="subtitle">Is an interactive web application that features the iconic characters from the famous Dragon Ball anime series in a carousel format. Developed using Taiwil and React technologies, this project offers Dragon Ball fans an exciting way to explore and meet their favorite characters in a visually engaging and easy-to-use way.</p>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  className="w-full h-auto"
                  src={process.env.PUBLIC_URL + '/img/dragonBall.jpg'}
                />
                <p>
                  <li className="social-item">
                    <a className="social-link" href="https://github.com/ktavilav/ReactCarousel.git" target="_blank" rel="noopener noreferrer">
                      <i className="ti-github" aria-hidden="true"></i> 
                      <span style={{ color: 'black' }}> Repositorio en GitHub</span>
                    </a>
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-package text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">The project "Carousel of Restaurant Types in Taiwil and React"</h5>
                <p className="subtitle">Is a dynamic web application that offers users the ability to explore a variety of restaurants classified by food types. Developed using Taiwil and React technologies, this project provides an interactive and visually engaging experience to discover new places to eat.</p>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  className="w-full h-auto"
                  src={process.env.PUBLIC_URL + '/img/restaurante.jpg'}
                />
                <p>
                  <li className="social-item">
                    <a className="social-link" href="https://github.com/ktavilav/restaurante-react" target="_blank" rel="noopener noreferrer">
                      <i className="ti-github" aria-hidden="true"></i> 
                      <span style={{ color: 'black' }}> Repositorio en GitHub</span>
                    </a>
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

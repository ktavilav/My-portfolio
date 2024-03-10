// src/components/Header.js

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap';
import '../styles/main.scss';

const Header = () => {
  return (
    <header className="header" id='home'>
      <div className="container">
        <ul className="social-icons pt-3">
        <li className="social-item"><a className="social-link text-light" target='_blank' href="https://www.linkedin.com/in/katherine-avila-viatela/"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
        <li className="social-item"><a className="social-link text-light" target='_blank' href="https://github.com/ktavilav"><i className="ti-github" aria-hidden="true"></i></a></li>
        </ul>  
        <div className="header-content">
          <h4 className="header-subtitle">Hello, I am</h4>
          <h1 className="header-title">Katherine Avila</h1>
          <h6 className="header-mono">Front end Designer | Developer</h6>
        </div>
      </div>
    </header>
  );
};

export default Header;

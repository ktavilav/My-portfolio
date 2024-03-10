import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="todo-list-container" id="price">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">Technical</span> skills</h2>
    <div className="skills-container">
      <div className="skill-category">
        <h2>ReactJS</h2>
        <ul>
          <li>React fundamentals: Components, props, state, life cycle.
              Hooks: useState, useEffect, useContext, useMemo, useCallback, useRef.
              React Router: Route configuration, navigation between pages.
              Global state management: Context API, Redux (optional).
              Working with forms in React.
              Use of React complementary libraries and tools (Material-UI, Styled Components).</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2>JavaScript</h2>
        <ul>
          <li>variables, data types, functions, loops, conditionals.
              Work with arrays and objects: methods like map, filter, reduce, etc.
              Functional programming in JavaScript.
              Promises, async/await for async handling.
              DOM manipulation: element selection, events, DOM manipulation.
              ES6+ features: destructuring, arrow functions, spread/rest operators</li>
          
        </ul>
      </div>

      <div className="skill-category">
        <h2>Tailwind CSS</h2>
        <ul>
          <li>Tailwind CSS basics: utility classes, initial setup.
              Creating responsive designs with Tailwind.
              Style customization: configuration of colors, fonts, sizes.
              Using Tailwind plugins for additional functionality.
              Performance optimization with PurgeCSS.
              Tailwind CSS integration with other CSS frameworks (React Bootstrap, Material-UI).</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2>Development tools</h2>
        <ul>
          <li>Use of building tools such as Webpack or Create React App.
              Dependency management with npm or Yarn.
              Configuration and use of version control systems such as Git.
              Debugging and testing applications using browser developer tools and unit testing with Jest (optional).</li>
        </ul>
      </div>

      <div className="skill-category">
        <h2>Additional concepts</h2>
        <ul>
          <li>Good front-end development practices.
              Web accessibility and good UX/UI practices.
              Performance optimization: fast page loading, bundle splitting, lazy loading of components.
              Basic knowledge of responsive and adaptive design.</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Skills;

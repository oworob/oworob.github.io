import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main id="Home">
      <header id="header">
        <h1>
          Hello there! <i className="fas fa-hand shake color" id="icon" />
        </h1>
        <p>
          I'm Olga, a passionate, young (and continuously learning) web
          developer, ocassionally video game developer.
        </p>
        <h4>
          Shall we create something together?{' '}
          <i className="fas fa-palette color" id="icon" />
        </h4>
      </header>

      <section id="content">
        <h4>
          What am I up to now? <i className="fas fa-glasses color" id="icon" />
        </h4>
        <p>
          Currently working as a Fullstack Software Developer Intern at{' '}
          <a href="https://samsungrd.pl/en" className="color bold hoverlink">
            Samsung R&D Institute Poland
          </a>
          !
        </p>
        <br />
        <p className="bold">Learning and polishing skills... </p>
        <ul>
          <li>Tailwind</li>
          <li>Angular with Material</li>
          <li>Vue3</li>
        </ul>
      </section>

      <hr />
      <footer id="bottom">
        <p>While you are here, feel free to take a look :)</p>
        <nav id="links">
          <Link to="/skills" className="button">
            Skills
          </Link>
          <Link to="/projects" className="button">
            Projects
          </Link>
          <a href="/cv_olga_worobjew.pdf" className="button">
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/olga-worobjew-494a1a2ba/"
            className="button"
          >
            LinkedIn
          </a>
        </nav>
      </footer>
    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Collapsable } from './Collapsable';

export function Skills() {
  return (
    <main id="Skills">
      <header id="header">
        <h1>
          Skills <i className="fas fa-wrench shake" id="icon" />
        </h1>
        <p>Everyone has some.</p>
        <hr />
      </header>

      <Collapsable
        title={
          <>
            Web Development <i className="fas fa-code color" id="icon" />{' '}
          </>
        }
      >
        <p>
          I specialize in developing web applications, using a variety of
          technologies and frameworks. Although my primary focus is on front-end
          development, I have solid experience in building back-end systems.
        </p>
        <ul>
          <li>
            Proficiency in semantic <span className="bold color">HTML</span> and
            responsive <span className="bold color">SCSS/CSS</span>
          </li>
          <li>
            Practical knowledge of{' '}
            <span className="bold color">JavaScript</span> and{' '}
            <span className="bold color">TypeScript</span>
          </li>
          <li>
            Experience with modern front-end libraries and frameworks such as{' '}
            <span className="bold color">React</span>,{' '}
            <span className="bold color">Vue</span> and{' '}
            <span className="bold color">Angular</span> including{' '}
            <span className="bold color">Material</span>, enabling development
            of single-page applications with reusable components, and state
            management
          </li>
          <li>
            Understanding of <span className="bold color">Node.js</span> with
            frameworks like <span className="bold color">Express.js</span> and{' '}
            <span className="bold color">Socket.io</span>
          </li>
          <li>
            Designing and implementing{' '}
            <span className="bold color">RESTful APIs</span>
          </li>
          <li>
            Familiarity with <span className="bold color">Java</span> for
            developing applications using tools like{' '}
            <span className="bold color">Spring Boot</span> and{' '}
            <span className="bold color">Thymeleaf</span>
          </li>
          <li>
            Experience with various databases, including{' '}
            <span className="bold color">Neo4j</span>,{' '}
            <span className="bold color">MongoDB</span> and{' '}
            <span className="bold color">PostgreSQL</span>
          </li>
          <li>
            Knowledge of <span className="bold color">Python</span> for crafting
            back-end solutions using <span className="bold color">Flask</span>
          </li>
          <li>
            Experience with integrating{' '}
            <span className="bold color">Keycloak</span> with web applications
          </li>
          <li>
            Practical experience in containerization using{' '}
            <span className="bold color">Docker</span>
          </li>
          <li>
            Proficiency with version control using{' '}
            <span className="bold color">Git</span>
          </li>
        </ul>
        <p>In addition to technical skills, I offer:</p>
        <ul>
          <li>
            <span className="bold">Attention to detail</span>, ensuring
            pixel-perfect implementation of designs
          </li>
          <li>
            <span className="bold">Collaborative mindset</span>, working closely
            with team members to achieve project goals
          </li>
          <li>
            <span className="bold">Adaptability</span> in responding to changing
            project requirements and priorities
          </li>
          <li>
            Continuous learning and adaptation to emerging technologies and
            trends
          </li>
        </ul>
      </Collapsable>

      <Collapsable
        title={
          <>
            Roblox Video Game Development{' '}
            <i className="fas fa-gamepad color" id="icon" />{' '}
          </>
        }
      >
        <p>
          With over <span className="bold color">7 years of experience</span>,
          primarily as a lead developer of a small team, I possess the skills
          necessary to create Roblox games of varying scale.
        </p>
        <ul>
          <li>
            Developing and maintaining codebase using{' '}
            <span className="bold color">Luau</span>
            <ul>
              <li>
                Implementing remote functions and remote events to ensure smooth
                communication between players and the game server, inluding
                features such as character customization, interaction with other
                players and NPC, quest systems, with server-side validation for
                security and anti-cheat measures
              </li>
              <li>
                Utilizing Roblox database API for data storage and persistency
              </li>
              <li>
                Optimizing code for memory efficiency and performance, including
                reducing script lag and network latency
              </li>
              <li>
                Developing custom tools and plugins to streamline development
                processes
              </li>
            </ul>
          </li>
          <li>
            Designing responsive and user-friendly interfaces for both mobile
            and PC players
          </li>
          <li>Crafting 3D animations using the Roblox animation editor</li>
          <li>
            Developing low-poly models with{' '}
            <span className="bold color">Blender</span> and integrating them
            into Roblox
          </li>
          <li>
            Designing vast, detailed maps using self-made and provided assets
            along with Roblox terrain and lighting tools
          </li>
          <li>
            Creating thumbnails using{' '}
            <span className="bold color">Adobe Photoshop</span> and{' '}
            <span className="bold color">Canva</span>
          </li>
          <li>
            User-centric approach, actively seeking and incorporating user
            feedback to improve game experience
          </li>
          <li>
            Familiarity with project management platforms, including{' '}
            <span className="bold color">Miro</span> and{' '}
            <span className="bold color">Trello</span>
          </li>
        </ul>
      </Collapsable>

      <h4>
        For examples of my work, check out my{' '}
        <Link to="/projects" className="hoverlink color">
          projects
        </Link>{' '}
        :)
      </h4>
    </main>
  );
}

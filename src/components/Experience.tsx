import React from 'react';

const jobs = [
  {
    title: 'Fullstack Software Developer Intern',
    date: 'May 2024 - Present',
    about: (
      <ul>
        <li>Developed internal tools using Angular and Python</li>
        <li>Conducted code reviews and resolved technical issues</li>
        <li>
          Collaborated with a small, international team in a Scrum environment
        </li>
        <li>Improved the application's user interface and experience</li>
      </ul>
    ),
    company: 'Samsung R&D Institute Poland',
    picture: 'samsung.png',
  },
  {
    title: 'Roblox Video Game Developer',
    date: '2019 - 2024',
    about: (
      <ul>
        <li>Developed, organized and maintained Luau codebase</li>
        <li>Modelled, rigged and animated 3D characters and assets</li>
        <li>Designed and implemented user interface</li>
        <li>Acted as a lead developer in a small, international team</li>
      </ul>
    ),
    company: 'Freelance',
    picture: 'roblox.png',
  },
];

export function Experience() {
  return (
    <div id="Experience">
      <div id="header">
        <h1>
          Experience <i className="fas fa-briefcase shake" id="icon" />
        </h1>
        <p>The story so far.</p>
        <hr />
      </div>
      <p>
        While you are here, feel free to take a look at my{' '}
        <a href="/cv_olga_worobjew.pdf" className="hoverlink bold color">
          CV
        </a>
        !
      </p>

      <div id="content">
        <div id="job-list">
          {jobs.map((job, index) => (
            <div id="position-wrapper" key={index}>
              <div id="timeline-piece">
                <div id="dot"></div>
              </div>
              <li id="position">
                <div id="positiondetailswrapper">
                  <div id="positiondetails">
                    <p id="date">{job.date}</p>
                    <h3 className="color">{job.title}</h3>
                    <p id="company">{job.company}</p>
                    <div id="about">{job.about}</div>
                  </div>
                  <div id="imgwrapper">
                    <img src={job.picture} alt={job.company}></img>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

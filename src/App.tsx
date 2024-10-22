import React, { ReactNode } from 'react';
import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { NotFound } from './components/NotFound';
import { Project } from './components/Project';

import { Contact } from './components/Contact';
import { About } from './components/About';
import { ScrollButton } from './components/ScrollButton';
import projects from './projects';
import { Experience } from './components/Experience';

interface ProjectsObject {
  [key: string]: {
    title: string;
    icon: string;
    date: string;
    about: ReactNode;
    logo?: string;
    github?: string;
    roblox?: string;
    tech?: ReactNode;
    features?: ReactNode;
    images: string[];
  };
}

function App() {
  const ProjectsData: ProjectsObject = projects;
  return (
    <div id="App">
      <Helmet>
        <title>Olga Worobjew | Portfolio</title>
        <meta
          name="description"
          content="Website made by and containing portfolio of Olga Worobjew"
        />
        <meta name="author" content="Olga Worobjew" />
        <meta
          name="keywords"
          content="portfolio, Olga Worobjew, web developer, software engineer, projects, skills, contact, about, experience, React, TypeScript, JavaScript, frontend development, web design, programming, coding, GitHub, SCSS, HTML, CSS"
        />

        <link rel="canonical" href="https://oworob.github.io/" />
      </Helmet>

      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {Object.entries(ProjectsData).map(([id, project]) => (
            <Route
              path={'/projects/' + id}
              key={id}
              element={<Project project={project} />}
            />
          ))}
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ScrollButton />
    </div>
  );
}

export default App;

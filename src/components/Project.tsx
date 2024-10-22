import React, { ReactNode } from 'react';
import { Collapsable } from './Collapsable';

interface ProjectProps {
  project: {
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

export function Project({ project }: ProjectProps) {
  return (
    <main id="Project">
      <header id="header">
        <h1>
          {project.title} <i className={`${project.icon} shake`} id="icon" />
        </h1>
        <p id="date">{project.date}</p>
        <div id="subheader">
          <div id="left">{project.about}</div>
          {project.logo && (
            <img
              id="logo"
              src={project.logo}
              alt={`${project.title}-project-logo`}
            />
          )}
        </div>
      </header>
      <hr />

      <section id="content">
        <nav id="more">
          {project.github && (
            <a className="button" id="link" href={project.github}>
              View on GitHub
            </a>
          )}
          {project.roblox && (
            <a className="button" id="link" href={project.roblox}>
              View on Roblox
            </a>
          )}

          {project.tech && (
            <Collapsable title="Technologies">{project.tech}</Collapsable>
          )}
          {project.features && (
            <Collapsable title="Features">{project.features}</Collapsable>
          )}
        </nav>

        <div id="images">
          {project.images.map((url: string, i: number) => (
            <img
              src={url}
              key={i}
              alt={`${project.title}-project-image-${i}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

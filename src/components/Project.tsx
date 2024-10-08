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
    <div id="Project">
      <div id="header">
        <h1>
          {project.title} <i className={`${project.icon} shake`} id="icon" />
        </h1>
        <p id="date">{project.date}</p>
        <div id="subheader">
          <div id="left">{project.about}</div>
          {project.logo && (
            <img id="logo" src={project.logo} alt={project.title} />
          )}
        </div>
      </div>
      <hr />

      <div id="content">
        <div id="more">
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
        </div>

        <div id="images">
          {project.images.map((url: string, i: number) => (
            <img src={url} key={i} alt={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

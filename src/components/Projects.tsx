import React, { ReactNode } from 'react'
import { Link } from "react-router-dom"
import projects from "../projects"

interface ProjectsObject {
    [key:string] : {
        title: string
        icon: string
        date: string
        about: ReactNode
        logo?: string
        github?: string
        roblox?: string
        tech?: ReactNode
        features?: ReactNode
        images: string[]
    }
}

export function Projects() {
    const projectsData: ProjectsObject = projects;

    return <div id="Projects">
        <div id="header">
            <h1>Projects <i className='fas fa-pen shake' id='icon' /></h1>
            <p>I made things.</p>
            <hr/>
        </div>

        {Object.entries(projectsData).map(([id, project]) => 
            <div id="project-wrapper" key={id}>
                <div id="project">
                    <div id="left">
                        <div id="title">
                            <Link to={id}>
                                <h3 id="title">{project.title} <i className={`${project.icon} color`} id='icon' /></h3>
                            </Link>
                            <p id="date">{project.date}</p>
                        </div>
                        <div id="content">
                            <div id="about">{project.about}</div>        
                            <div id="buttons">
                                <Link to={id} className="button">Read more</Link>
                                {project.github && (<a className='button' href={project.github}>View on GitHub</a>)}
                                {project.roblox && (<a className='button' href={project.roblox}>View on Roblox</a>)}
                            </div>
                        </div>
                    </div>
                    <Link id='image' to={id}>
                        <img src={project.images[0]} alt={id} />
                    </Link>            
                </div>
                <hr/>
            </div>
        )}
        

        <h4>Most of my projects are available on my <a className="hoverlink color" href="https://github.com/oworob">GitHub</a>, including code and installation.</h4>
    </div>

}
import React from 'react'
import { Link } from 'react-router-dom';
import { Collapsable } from './Collapsable';

export function Skills() {
    return <div id="Skills">
        <div id="header">
            <h1>Skills <i className='fas fa-wrench shake' id='icon' /></h1>
            <p>Everyone has some.</p>
            <hr />
        </div>

        <Collapsable title={<>Front-end Web Development <i className='fas fa-code color' id='icon' /> </>}>
            <p>I specialize in developing intuitive and responsive front-end web applications, using a variety of technologies and frameworks, including:</p>
            <ul>
                <li>Proficiency in semantic <span className='bold color'>HTML5</span> for building the structure and content of web pages</li>
                <li>Expertise in <span className='bold color'>SCSS/CSS</span> for styling and creating visually appealing interfaces, ensuring consistency and scalability across different devices and browsers</li>
                <li>Knowledge of <span className='bold color'>JavaScript</span> and <span className='bold color'>TypeScript</span> for implementing interactive and dynamic functionalities in web applications</li>
                <li>Experience with modern front-end libraries and frameworks such as <span className='bold color'>React.js</span>, <span className='bold color'>Vue.js</span> and <span className='bold color'>Angular</span> including <span className='bold color'>Material</span>, enabling efficient development of single-page applications (SPAs) with reusable components, and state management</li>
                <li>Ability to integrate front-end with back-end systems using frameworks like <span className='bold color'>Thymeleaf</span>, ensuring seamless data exchange and rendering on the client side</li>
            </ul>
            <p>In addition to technical skills, I bring:</p>
            <ul>
                <li>Attention to detail, ensuring pixel-perfect implementation of designs and adherence to UI/UX best practices</li>
                <li>Collaborative mindset, working closely with back-end developers to achieve project goals</li>
                <li>Adaptability and flexibility in responding to changing project requirements and priorities, while maintaining a focus on quality and efficiency</li>
                <li>Continuous learning and adaptation to emerging technologies and trends in front-end development</li>
            </ul>
        </Collapsable>

        <Collapsable title={<>Back-end Web Development <i className='fas fa-server color' id='icon' /> </>}>
            <p>Although my primary focus is on front-end development, I have solid experience in building back-end systems to support web applications. My experience includes using technologies such as:</p>
            <ul>
                <li><span className='bold color'>Node.js</span> with frameworks like <span className='bold color'>Express.js</span> and <span className='bold color'>Socket.io</span> for building scalable and real-time web applications</li>
                <li>Designing and implementing RESTful APIs, ensuring seamless communication between front-end and back-end systems</li>
                <li><span className='bold color'>Spring Boot</span> for developing robust and enterprise-grade Java-based web applications with ease</li>
                <li>Experience with various databases, including <span className='bold color'>Neo4j</span> for graph database applications and <span className='bold color'>MongoDB</span> for document-oriented databases and integrating them with the API</li>
                <li>Python for crafting efficient and versatile back-end solutions using Flask</li>
                <li>Testing and debugging back-end systems to ensure reliability and quality, with proficiency in tools like Postman</li>
                <li>Experience with <span className='bold color'>Keycloak</span> for managing identity and access control in web applications, including single sign-on (SSO), user authentication, and authorization policies</li>
            </ul>
            <p>In addition I am proficient in:</p>
            <ul>
                <li>Containerization with <span className='bold color'>Docker</span>, ensuring consistency and portability of software across different environments</li>
                <li>Version control with <span className='bold color'>Git</span>, enabling collaboration, tracking changes, and ensuring code integrity</li>
            </ul>
        </Collapsable>

        <Collapsable title={<>Roblox Video Game Development <i className='fas fa-gamepad color' id='icon' /> </>}>
            <p>With over <span className='bold color'>7 years of experience</span>, primarily as a lead developer of a small team, I possess the skills necessary to create games of varying scale, including:</p>
            <ul>
                <li>Proficient coding in <span className='bold color'>Luau</span>
                    <ul>
                        <li>Creating modular and reusable code structures to enhance maintainability and scalability</li>
                        <li>Implementing robust client-server events to facilitate smooth communication between players and the game server</li>
                        <li>Developing efficient data synchronization mechanisms to ensure consistency and accuracy of game state across all clients</li>
                        <li>Utilizing remote functions and remote events to handle player actions, such as character customization, interaction with other players and NPC, quest systems, with server-side validation for security and anti-cheat measures</li>
                        <li>Utilizing Roblox database API for data storage</li>
                        <li>Optimizing code for memory efficiency and performance, including reducing script lag and network latency</li>
                        <li>Developing custom tools and plugins to streamline development processes and improve workflow efficiency</li>
                    </ul>
                </li>
                <li>Designing responsive and user-friendly interfaces for both mobile and PC players</li>
                <li>Crafting 3D animations using the Roblox animation editor, primarily focusing on quadrupedal animals</li>
                <li>Developing low-poly models with <span className='bold color'>Blender</span> and seamlessly integrating them into Roblox while ensuring proper rigging</li>
                <li>Designing vast, interesting and detailed maps using self-made and provided assets along with Roblox terrain and lighting tools</li>
                <li>Creating simple yet eye-catching thumbnails using <span className='bold color'>Adobe Photoshop</span> and <span className='bold color'>Canva</span></li>
                <li>Thorough testing and debugging to ensure high-quality, bug-free games</li>
                <li>User-centric approach, actively seeking and incorporating user feedback to improve game experiences</li>
                <li>Commitment to continuous learning and improvement, staying updated with the latest technologies and gaming trends</li>
                <li>Familiarity with project management platforms, including <span className='bold color'>Miro</span> and <span className='bold color'>Trello</span></li>
            </ul>
        </Collapsable>
        
        <h4>For examples of my work, check out my <Link to='/projects' className='hoverlink color'>projects</Link> :)
        </h4>

    </div>
}
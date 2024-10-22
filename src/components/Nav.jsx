import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = {
  '/': { icon: 'fa-house', text: 'Home' },
  '/about': { icon: 'fa-heart', text: 'About' },
  '/experience': { icon: 'fa-briefcase', text: 'Experience' },
  '/projects': { icon: 'fa-pen', text: 'Projects' },
  '/skills': { icon: 'fa-wrench', text: 'Skills' },
  '/contact': { icon: 'fa-envelope', text: 'Contact' },
};

export function Nav() {
  const [ShowNav, SetShowNav] = useState(false);
  const location = useLocation();

  return (
    <div
      id="Nav"
      onMouseEnter={() => SetShowNav(true)}
      onMouseLeave={() => SetShowNav(false)}
      className={ShowNav ? 'navshown' : ''}
    >
      <div id="header">
        <hr />
        <h3>Olga Worobjew</h3>
        <p>Resume</p>
      </div>

      <div id="links">
        {Object.entries(links).map(([path, { icon, text }]) => (
          <Link key={path} to={path}>
            <div id="link">
              <i className={`fas ${icon}`} id="icon" />
              <span className={location.pathname === path ? 'bold' : ''}>
                {text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

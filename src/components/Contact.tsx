import React from 'react';

const contacts: object = {
  mail: {
    icon: 'fas fa-envelope',
    data: 'oworobjew@gmail.com',
    link: 'mailto: oworobjew@gmail.com',
    about: 'Send me an e-mail...',
  },
  discord: {
    icon: 'fab fa-discord',
    data: 'archeonia',
    link: 'https://discord.com/users/250331669603680256',
    about: '...message me on Discord...',
  },
  github: {
    icon: 'fab fa-github',
    data: 'oworob',
    link: 'https://github.com/oworob',
    about: '...or check out my GitHub!',
  },
};

export function Contact() {
  return (
    <main id="Contact">
      <header id="header">
        <h1>
          Contact <i className="fas fa-envelope shake" id="icon" />
        </h1>
        <p>Let's get in touch.</p>
        <hr />
      </header>

      <section id="content">
        <article id="contacts">
          {Object.entries(contacts).map(([id, data]) => (
            <div key={id} id="contact">
              <a href={data.link}>
                <i className={data.icon} id="icon" />
              </a>
              <a href={data.link}>
                <p id="name" className="bold">
                  {data.data}
                </p>
              </a>
              <p id="about">{data.about}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

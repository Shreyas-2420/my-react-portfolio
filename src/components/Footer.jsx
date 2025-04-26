import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/Shreyas-2420",
    label: "GitHub"
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/shreyas-m-571317258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn"
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/Shreyee",
    label: "Twitter"
  },
  {
    id: 4,
    icon: <FiInstagram />,
    url: "https://instagram.com/Mine",
    label: "Instagram"
  },
  {
    id: 5,
    icon: <FiMail />,
    url: "Shreyas2024m@email.com",
    label: "Email"
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {socialLinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-icon"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Shreyas M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
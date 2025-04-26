import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/Mine",
    label: "GitHub"
  },
  {
    id: 2,
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/Shreyee",
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
    url: "mailto:your@email.com",
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
import React from "react";

const Footer: React.FC = () => (
  <footer className="footer">
    <p>By Ali Asghar | AI Innovations</p>
    <div className="socials">
      <a href="https://twitter.com" target="_blank">
        Twitter
      </a>
      <a href="https://linkedin.com" target="_blank">
        LinkedIn
      </a>
      <a href="https://github.com" target="_blank">
        GitHub
      </a>
    </div>

    <style jsx>{`
      .footer {
        padding: 20px;
        background: linear-gradient(45deg, #111, #333);
        text-align: center;
        color: #ffffff;
        box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.5);
      }

      .socials a {
        color: #ffdd57;
        margin: 0 10px;
        text-decoration: none;
        font-weight: bold;
        transition:
          color 0.3s,
          transform 0.3s;
      }

      .socials a:hover {
        color: #ffffff;
        transform: scale(1.1);
      }
    `}</style>
  </footer>
);

export default Footer;

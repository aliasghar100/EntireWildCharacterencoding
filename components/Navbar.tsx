import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="logo">
      <Link href="/">AI Innovations</Link>
    </div>
    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
      <Link href="/gallery">Gallery</Link>
    </div>
    <style jsx>{`
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: linear-gradient(45deg, #000, #222);
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
      }

      .logo a {
        color: #ff6bcb;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .nav-links {
        display: flex;
        gap: 20px;
      }

      .nav-links a {
        color: #ffffff; /* Set link color to white */
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 600;
        position: relative;
        padding: 5px 0;
        transition: color 0.3s ease;
      }

      .nav-links a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: #ff6bcb;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }

      .nav-links a:hover {
        color: #ff6bcb;
      }

      .nav-links a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }

      .nav-links a:focus {
        outline: none;
      }
    `}</style>
  </nav>
);

export default Navbar;

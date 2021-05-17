import React from "react";

export default function Submenu() {
  return (
    <div className="burger-menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/whitepaper">Whitepaper</a>
        </li>
        <li>
          <a href="/doc">Doc</a>
        </li>
      </ul>
      <div className="footer-social">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.youtube.com/">
          <i className="fab fa-youtube" />
        </a>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://telegram.org/">
          <i className="fab fa-telegram-plane" />
        </a>
        <a href="https://www.reddit.com/">
          <i className="fab fa-reddit-alien" />
        </a>
      </div>
    </div>
  );
}

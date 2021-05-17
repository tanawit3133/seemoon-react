import React from "react";

export default function Burger() {
  return (
    <div className="burger-menu">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Whitepaper</a>
        </li>
        <li>
          <a href="#">Doc</a>
        </li>
      </ul>
      <div className="footer-social">
        <a href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-youtube" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-telegram-plane" />
        </a>
        <a href="#">
          <i className="fab fa-reddit-alien" />
        </a>
      </div>
    </div>
  );
}

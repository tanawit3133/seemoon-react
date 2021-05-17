import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-row">
          <a href="https://seemoon.io/" className="footer-logo">
            <img src="img/logo-footer.png" />
          </a>
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
      </div>
    </footer>
  );
}

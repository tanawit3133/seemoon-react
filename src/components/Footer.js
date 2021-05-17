import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-row">
          <a href="#" className="footer-logo">
            <img src="img/logo-footer.png" />
          </a>
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
      </div>
    </footer>
  );
}

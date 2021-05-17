import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-header">
          <div className="top-menu">
            <div className="left-top">
              <a href="#" className="logo">
                <img src="img/logo.png" />
              </a>
              <div className="main-menu">
                <ul>
                  <li>
                    <a href="/" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/whitepaper">Whitepaper</a>
                  </li>
                  <li>
                    <a href="/docs">Docs</a>
                  </li>
                </ul>
              </div>
              <div className="burger-icon">
                <div className="burger-line burger-line-1" />
                <div className="burger-line burger-line-2" />
                <div className="burger-line burger-line-3" />
              </div>
            </div>
            <div className="right-top">
              <a href="https://www.google.com/" target="_blank" className="metamask">
                Connect Metamask
              </a>
            </div>
          </div>
        </div>
      </header>
      
    );
  }
}

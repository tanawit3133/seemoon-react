import React from 'react'

export default function Home() {
    return (
        <div>
      <section className="section-top">
        <div className="text-layer-2">
          <div className="container">
            <div className="top-text-box">
              <h1 className="main-text-title wow fadeInUp">
                Decentralized Finance for
                <br />
                Earning Interest by Deposit Cryptoassets.
              </h1>
              <div className="button-group">
                <a href="/" className="launch-button wow fadeInUp">
                  Launch app
                </a>
                <a href="/" className="buy-button wow fadeInUp">
                  Buy Seemoon
                </a>
              </div>
              {/* button group */}
            </div>
            {/* top text box */}
          </div>
          {/* container */}
          <div className="bottom-cover-absolute">
            <div className="container">
              <div className="bottom-text-stat">
                <div className="a-block">
                  <div className="icon-circle">
                    <img alt="" src="img/icon-tvl.png" />
                  </div>
                  <div className="text-zone">
                    <p>Total Value Locked</p>
                    <h3 className="count">$310,908,789</h3>
                  </div>
                </div>
                {/* a block */}
                <div className="a-block">
                  <div className="icon-circle">
                    <img alt="" src="img/icon-ttv.png" />
                  </div>
                  <div className="text-zone">
                    <p>Total Trading Volume</p>
                    <h3 className="count">$55,738,189</h3>
                  </div>
                </div>
                {/* a block */}
                <div className="a-block">
                  <div className="icon-circle">
                    <img alt="" src="img/icon-market.png" />
                  </div>
                  <div className="text-zone">
                    <p>See Market Cap</p>
                    <h3 className="count">$101,210,789</h3>
                  </div>
                </div>
                {/* a block */}
              </div>
              {/* bottom text stat */}
            </div>
          </div>
        </div>
        {/* layer 2 */}
      </section>
      <section
        className="section-padding section-intro"
        style={{ backgroundImage: 'url("img/bg-intro.png")' }}
      >
        <div className="container">
          <div className="main-title">
            <h2>What is Seemoon?</h2>
            <p>
              Join our community to learn more and have a conversation with our
              team.
            </p>
          </div>
          <div className="row-of-service">
            <div className="white-service-box">
              <img alt="" src="img/icon-farm.png" />
              <h3>Yield Farming</h3>
            </div>
            {/* service */}
            <div className="white-service-box">
              <img alt="" src="img/icon-ex.png" />
              <h3>
                Token Swap
                <br />
                Automated Market Maker
              </h3>
            </div>
            {/* service */}
            <div className="white-service-box">
              <img alt="" src="img/icon-money.png" />
              <h3>Liquidity Pool</h3>
            </div>
            {/* service */}
            <div className="white-service-box">
              <img alt="" src="img/icon-chain.png" />
              <h3>
                Token List
                <br />
                Binance Smart
                <br />
                Chain
              </h3>
            </div>
            {/* service */}
          </div>
          {/* row */}
        </div>
      </section>
      <section className="section-roadmap">
        <div className="container">
          <div className="main-title white-title">
            <h2>Roadmap</h2>
          </div>
          <div className="roadmap-row road-may">
            <img alt="" src="img/road-may.png" />
            <div className="road-content">
              <h3>2021</h3>
              <ul>
                <li>Launch seemoon.io</li>
                <li>Start Token Distribution On Binance Smart Chain</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-june">
            <img alt="" src="img/road-june.png" />
            <div className="road-content">
              <ul>
                <li>Launch Seemoon Pool and Seemoon Exchange</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="clearfix" />
          <div className="roadmap-row road-july">
            <img alt="" src="img/road-july.png" />
            <div className="road-content">
              <ul>
                <li>Launch exchange protocol.</li>
                <li>Launch lending protocol.</li>
                <li>
                  Launch USDT Pool , Binance Pool, Ethereum Pool, Seemoon Pool.{" "}
                </li>
                <li>
                  Start yield farming on both exchange and lending protocol.
                </li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-august">
            <img alt="" src="img/road-august.png" />
            <div className="road-content">
              <ul>
                <li>List token on pancakswap.finance, bitmart.com</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-september">
            <img alt="" src="img/road-september.png" />
            <div className="road-content">
              <ul>
                <li>List token on gate.io, burency.com</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-october">
            <img alt="" src="img/road-october.png" />
            <div className="road-content">
              <ul>
                <li>List token on zbg.io, gemini.com</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-november">
            <img alt="" src="img/road-november.png" />
            <div className="road-content">
              <ul>
                <li>List token on letsexchange.io, whitebit.com</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
          {/* row */}
          <div className="roadmap-row road-december">
            <img alt="" src="img/road-december.png" />
            <div className="road-content">
              <ul>
                <li>List token on Binance, Uniswap</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
          {/* row */}
        </div>
      </section>
      <section className="section-company">
        <div className="company-container">
          <div className="main-title white-title">
            <h2>Our Community</h2>
            <p>
              Join our community to learn more and have a conversation with our
              team.
            </p>
          </div>
          <div className="row-of-social">
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-facebook.png" />
              </div>
              <h3>Facebook</h3>
              <p>
                Like and follow
                <br />
                on Facebook.
              </p>
            </a>
            {/* one social */}
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-discord.png" />
              </div>
              <h3>Discord</h3>
              <p>
                Chat in real time with
                <br />
                the Uniswap
                <br />
                community.
              </p>
            </a>
            {/* one social */}
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-twitter.png" />
              </div>
              <h3>Twitter</h3>
              <p>
                Follow @Seemooncoin
                <br />
                for update and news.
              </p>
            </a>
            {/* one social */}
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-discourse.png" />
              </div>
              <h3>Discourse</h3>
              <p>
                Long form goverment
                <br />
                and protocol
                <br />
                discussion.
              </p>
            </a>
            {/* one social */}
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-reddit.png" />
              </div>
              <h3>Reddit</h3>
              <p>
                Join the Uniswap
                <br />
                community on Reddit.
              </p>
            </a>
            {/* one social */}
            <a href="/" className="one-social">
              <div className="the-social-icon">
                <img alt="" src="img/icon-telegram.png" />
              </div>
              <h3>Telegram</h3>
              <p>
                Secret chat
                <br />
                community.
              </p>
            </a>
            {/* one social */}
          </div>
        </div>
      </section>
      <section className="section-subsribe">
        <div className="container">
          <div className="main-title white-title">
            <h2>Subcribe And Stay Updated</h2>
          </div>
          <form>
            <div className="sub-group">
              <input
                type="email"
                name="subcribe"
                placeholder="example@email.com"
                required
              />
              <button type="submit">Subcribe</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    )
}

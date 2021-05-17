import React from "react";

export default function Contact() {
  return (
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
  );
}

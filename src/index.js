import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LauraSmith from "./assets/laura-smith.jpg";
import { ReactComponent as Envelope } from "./assets/envelope.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as GitHub } from "./assets/github.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import "./index.css";
import Button from "./Button";
import Info from "./Info";
import Attribution from "./Attribution";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <main className="card">
      <img
        src={LauraSmith}
        alt="Laura Smith"
        className="card__profile"
        width="400"
        height="500"
      />
      <div className="card__container">
        <div className="text-align:center">
          <h1>Laura Smith</h1>
          <p className="card__job margin-top:0">Frontend Developer</p>
          <a href="/" className="card__website">
            laurasmith.website
          </a>
        </div>
        <div className="card__contact">
          <Button
            text={"Email"}
            icon={
              <Envelope
                className="card__icon"
                aria-hidden="true"
                focusable="false"
              />
            }
            backgroundColor={"white"}
          />
          <Button
            text={"LinkedIn"}
            icon={
              <LinkedIn
                className="card__icon"
                aria-hidden="true"
                focusable="false"
              />
            }
            backgroundColor={"blue"}
          />
        </div>
        <div className="card__text">
          <Info
            title="About"
            description="I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices. I am always looking for new things to
            learn."
          />
          <Info
            title="Interests"
            description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
          />
        </div>
      </div>
      <div className="card__social-media">
        <a href="/" aria-label="Twitter">
          <Twitter
            className="card__social-icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
        <a href="/" aria-label="Facebook">
          <Facebook
            className="card__social-icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
        <a href="/" aria-label="Instagram">
          <Instagram
            className="card__social-icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
        <a href="/" aria-label="GitHub">
          <GitHub
            className="card__social-icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </div>
    </main>
    <Attribution />
  </StrictMode>
);

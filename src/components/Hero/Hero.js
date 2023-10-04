import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Waving from "../../assets/img/waving.png";
import "./_hero.scss";

const skillsIcon = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=java,js",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=spring,react",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=bootstrap,scss",
    id: 4,
  },
];
function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Java Developer</h1>
                <img src={Waving} alt="Waving_hand" />
                <p>Hi, I'm OdiK. A fresher Java Developer based in Ha Noi 🏙</p>
                <span>
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Kiddhub"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcon.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

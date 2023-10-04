import React from "react";
import WorkingEmoji from "../../assets/img/workingEmoji.png";
import AboutImg from "../../assets/img/AboutImg.webp";
import RoundText from "../../assets/img/java.png";
import "./_about.scss";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundText} alt="Text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Java Developer <br /> based in Ha Noi 📍
              </h4>
              <p>
                I am a senior student at Hanoi University of Science and
                Technology (HUST).I possess an impressive arsenal of skills in
                Java Core, Spring Boot, HTML, CSS, Bootstrap, React, and SCSS. I
                am eager to apply my skills to real-world projects, collaborate
                with industry professionals, and continue learning and growing
                as a developer. I am enthusiastic about joining diverse projects
                and embracing the unique challenges they offer to further
                enhance my abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

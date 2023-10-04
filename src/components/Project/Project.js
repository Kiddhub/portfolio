import React from "react";
import ProBox from "./ProBox";
import "./_projects.scss";
import gi from "../../assets/img/gi.JPG";

function Project() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>Portfolio</p>
            <h3>Each project is a unique piece of development 🧩 </h3>
            <div className="projects-grid">
              <ProBox
                title="ECOMMERCE"
                img={gi}
                date="(MAY 2023)"
                description="The first project I made with With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="Spring Boot"
                techno2="HTML"
                code=""
                demo=""
                scrollY="-83%"
                icon="🛒"
                cName="reversed-proj"
              />
              <ProBox
                title="ECOMMERCE"
                img={gi}
                date="(MAY 2023)"
                description="The first project I made with With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="Spring Boot"
                techno2="HTML"
                code=""
                demo=""
                scrollY="-83%"
                icon="🛒"
              />
              <ProBox
                title="ECOMMERCE"
                img={gi}
                date="(MAY 2023)"
                description="The first project I made with With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="Spring Boot"
                techno2="HTML"
                code=""
                demo=""
                scrollY="-83%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;

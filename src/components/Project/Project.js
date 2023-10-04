import React from "react";
import ProBox from "./ProBox";
import "./_projects.scss";
import Ecomm from "../../assets/img/ecom.png";
import Store from "../../assets/img/bookingstore.png";
import Station from "../../assets/img/station.png";
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
                img={Ecomm}
                date="(DECEMBER 2022)"
                description="The first project I made with With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="Spring Boot"
                techno2="HTML"
                techno3="MySQL"
                code="https://github.com/Kiddhub/e-shop"
                demo="#"
                scrollY="-83%"
                icon="🛒"
                cName="reversed-proj"
              />
              <ProBox
                title="BOOKING STORE"
                img={Store}
                date="(JUNE 2023)"
                description="This is a project at my school, aiming to create a user-friendly and convenient website for people to search for and purchase books to read."
                techno1="Spring Boot"
                techno2="Bootstrap"
                techno3="MySQL"
                code="https://github.com/Kiddhub/bookstore"
                demo="#"
                scrollY="-83%"
                icon="📕​"
              />
              <ProBox
                title="BOOKING STATION"
                img={Station}
                date="(MAY 2023)"
                description="Project management website of subjects across the range particular
                school is HUST. It's a App that allows users to search for and book football fields "
                techno1="JavaFx"
                techno2="MySQL"
                code="https://github.com/Kiddhub/stationManagement"
                demo="#"
                scrollY="-83%"
                icon="⚽​"
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

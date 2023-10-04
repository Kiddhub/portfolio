import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        hello
        <Nav />
        <Hero />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    );
  }
}

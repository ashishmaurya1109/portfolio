import React from "react";
import "./about.css";
import ME from "../../assets/ashish13.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Graduation</h5>
              <small>B.Tech(CSE)</small>
              <br />
              <small>8.2 CGPA</small>
            </article>
            <article className="about__card">
              <GiSchoolBag className="about__icon" />
              <h5>Intermediate</h5>
              <small>CBSE</small>
              <br />
              <small>73%</small>
            </article>
            <article className="about__card">
              <LiaSchoolSolid className="about__icon" />
              <h5>Highschool</h5>
              <small>CBSE</small>
              <br />
              <small>86%</small>
            </article>
          </div>

          <p>
            I am a Software Engineer with expertise and keen interest in
            building full-stack web applications using MERN stack. I have good
            knowledge and experience in building responsive web applications
            which can target various devices with different screen resolutions.
            I am a quick learner and passionate about learning new technologies.
          </p>
          <a href="#contact" className="btn ntn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

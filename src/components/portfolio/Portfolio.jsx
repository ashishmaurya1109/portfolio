import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Qkart-React",
    github: "https://github.com/ashishmaurya1109/qkart-react",
    demo: "https://qkart-react-ashish.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Qkart-Node",
    github: "https://github.com/ashishmaurya1109/qkart-node",
    demo: "https://qkart-node-ashish.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Qtify",
    github: "https://github.com/ashishmaurya1109/qtify",
    demo: "https://qtify-ashish.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Qtrip-Dynamic",
    github: "https://github.com/ashishmaurya1109/qtrip-dynamic",
    demo: "https://qtrip-dynamic-ashish.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "X-board",
    github: "https://github.com/ashishmaurya1109/xboard",
    demo: "https://xboard-ashish.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Qtrip-Static",
    github: "https://github.com/ashishmaurya1109/qtrip-static",
    demo: "https://qtrip-static-ashish.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

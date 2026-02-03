import "./Sec4.css";
import { useState } from "react";

import Bms from "../assets/bms.jpg";
import Slt from "../assets/SignLangTranslation.jpg";
import Calc from "../assets/Calculator.png";
import Ecom from "../assets/Ecommerce.jpg";

const projects = [
  {
    title: "Banking Management System",
    image: Bms,
    desc: "GUI-based Banking Management System using Java, Swing, JDBC, and MySQL with secure account handling and transactions.",
    github: "",
    liveDemo: ""
  },
  {
    title: "E-commerce Website",
    image: Ecom,
    desc: "Full-stack e-commerce website with cart, checkout, Razorpay integration, and admin dashboard using PHP & MySQL.",
    github: "",
    liveDemo: ""
  },
  {
    title: "Sign Language Translation",
    image: Slt,
    desc: "Real-time Sign Language to Text & Speech Converter using Python, OpenCV, and Machine Learning.",
    github: "",
    liveDemo: ""
  },
  {
    title: "React Calculator",
    image: Calc,
    desc: "Responsive calculator built using React functional components and hooks.",
    github: "https://github.com/Maheshgopi23/Calculator-Using-React",
    liveDemo: "https://calculator-using-react-omega.vercel.app/"
  }
];

function Sec4() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const next = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="project-title">Projects</h2>
      <span className="sub m-t-0">Go through my Projects</span>

      <div className="gallery">
        <ul className="cards">
          {projects.map((project, index) => {
            let className = "";
            if (index === currentIndex) className = "active";
            else if (index === currentIndex - 1) className = "prev";
            else if (index === currentIndex + 1) className = "next";

            return (
              <li key={index} className={className}>
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="buttons">
                  <button className="btn" onClick={() => window.open(project.github, "_blank")}>GitHub</button>
                  <button className="btn" onClick={() => window.open(project.liveDemo, "_blank")}>Live Demo</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Controls at bottom */}
      <div className="controls">
        <button onClick={prev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button
          onClick={next}
          disabled={currentIndex === projects.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Sec4;

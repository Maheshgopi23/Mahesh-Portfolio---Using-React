import "./Sec1.css";
import Resume from "../assets/Mahi_Resume.pdf";
import MaheshImage from "../assets/MaheshGopi.jpg";

function Sec1() {
  return (
    <section className="sec1">
      
      <div className="sec-1-1">
        <img 
          src={MaheshImage}
          alt="Mahesh Gopi"
        />
      </div>

      <div className="sec-1-2">
        <span className="sec-1-2-1">Hello, I am</span>

        <h2>MAHESH GOPI AMIRISETTI</h2>

        <p>
          I’m Mahesh Gopi Amirisetti, a passionate and curious Computer Science & Engineering 
          student with a strong interest in software development, problem-solving, and AI-driven 
          applications. I enjoy turning ideas into real-world solutions using clean code, 
          thoughtful design, and scalable architectures.
          I’ve worked across Java, web development, databases, and machine learning, and 
          I’m constantly exploring how technology can be used to build impactful and user-centric 
          products.
        </p>

        <div className="btns">
          <a
            href={Resume}
            download
          >
            Download Resume
          </a>

          <button
            type="button"
            onClick={() => window.location.href = "tel:+918555823649"}
          >
            Contact Info
          </button>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/mahesh-gopi-18a5b728a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Maheshgopi23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://leetcode.com/u/Mahesh_gopi23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-code-alt"></i>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Sec1;

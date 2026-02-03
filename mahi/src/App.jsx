import "./App.css";
import "./sec1/Sec1.jsx";
import Sec1 from "./sec1/Sec1.jsx";
import Sec2 from "./sec2/Sec2.jsx";
import Sec3 from "./sec3/Sec3.jsx";
import Sec4 from "./sec4/Sec4.jsx";
import Sec5 from "./sec5/Sec5.jsx";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid px-4">

          <div className="avatar me-3">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navbar-brand logo" href="#">
            Mahesh Gopi
          </div>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav menu-bar gap-3">
              <li className="nav-item">
                <a className="nav-link text-white" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </>
  );
}

export default App;

import './Sec2.css';

function Sec2() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <i className="bx bxs-graduation edu-icon"></i>
          <h2 className="title justify-content-center">Education</h2>
        </div>
        <div className="edu">
          <a className="edu1" id="boxes" href="#">
            <h4>B.Tech</h4>
            <span className="specialization">Artificial Intelligence And Data Science</span>
            <span>SRKR Engineering College Bhimavaram</span>
            <span className="date">2023 - 2026</span>
          </a>
          <a className="edu2" id="boxes" href="#"> 
            <h4>Diploma</h4>
            <span className="specialization">Electronics And Communication Engineering</span>
            <span>Sasi Institue Of Technology And Engineering Tadepalligudem</span>
            <span className="date">2020 - 2023</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sec2;

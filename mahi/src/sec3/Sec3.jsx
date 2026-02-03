import './Sec3.css';
import java from '../assets/skills/java.png';
import python from '../assets/skills/python.png';
import javascript from '../assets/skills/javascript.png';
import react from '../assets/skills/react.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import sql from '../assets/skills/sql.png';
import bootstrap from '../assets/skills/bootstrap.png';
import springboot from '../assets/skills/springboot.png';

function Sec3(){
    return(
        <>
            <div className="skills-sec" id="skills">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-container">
                    <div className="icon-container">
                        <img src={java} alt="Java" className="skill-icon" />
                        <span>Java</span>
                    </div>
                    <div className="icon-container">
                        <img src={python} alt="Python" className="skill-icon" />
                        <span>Python</span>
                    </div>
                    <div className="icon-container">
                        <img src={javascript} alt="JavaScript" className="skill-icon" />
                        <span>Javascript</span>
                    </div>
                    <div className="icon-container">
                        <img src={react} alt="React" className="skill-icon" />
                        <span>React</span>
                    </div>
                    <div className="icon-container">
                        <img src={html} alt="HTML" className="skill-icon" />
                        <span>HTML</span>
                    </div>
                    <div className="icon-container">
                        <img src={css} alt="CSS" className="skill-icon" />
                        <span>CSS</span>
                    </div>
                    <div className="icon-container">
                        <img src={sql} alt="SQL" className="skill-icon" />
                        <span>SQL</span>
                    </div>
                    <div className="icon-container">
                        <img src={bootstrap} alt="Bootstrap" className="skill-icon" />
                        <span>Bootstrap</span>
                    </div>
                    <div className="icon-container">
                        <img src={springboot} alt="Spring Boot" className="skill-icon" />
                        <span>Spring Boot</span>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Sec3;
import "./Sec5.css";
import { useState } from "react";
import Swal from 'sweetalert2'

function Sec5(){

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "ef9205c7-8ad9-4b72-9648-17fc85367326"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Success!");

        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        event.target.reset(); // clear form
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setResult("Error");

      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
    return(
        <>
            <section className="contact-section" id="contact">
            <h2>Contact Me</h2>
            <div className="contact">
                <form className="form" onSubmit={onSubmit} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <div className="submission">
                        <button type="submit">Send</button>
                    </div>
                </form>
                <div className="contact-details">
                    <div className="contact-title">
                        <h4>Get in Touch</h4>
                    </div>
                    <div className="contact-links">
                        <a href="https://www.linkedin.com/in/mahesh-gopi-18a5b728a/">
                            <i className='bx bxl-linkedin'></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/_mr._.mahi.__?igsh=azhndmNpMzFhanQw">
                            <i className="bx bxl-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="tel:+91 8555823649">
                            <i className="bx bx-phone"></i>
                            <span>+91 8555823649</span>
                        </a>
                        <a href="mailto:maheshgopi023@gmail.com">
                            <i className="bx bx-envelope"></i>
                            <span>maheshgopi023@gmail.com</span>
                        </a>        
                    </div>
                </div> 
            </div>
        </section>
        </>
    )
}

export default Sec5;
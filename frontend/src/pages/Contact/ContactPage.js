import React,{useState} from "react";
import "./ContactPage.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        message,
      });
      if (res.data.success) {
        alert("Message Sent Successfully");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };
  return (
    <>
      <div className="contact" id="cnt">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvcKKa07wVJP-kJT_wc_tn7bBYxuLloS0lw&s"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h6>
                    Contact with
                    <a
                      href="https://www.linkedin.com/in/chandra-prakash-062541248"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={30} color="blue" className="ms-2" />
                    </a>
                    <a
                      href="https://github.com/Chandraprakash098"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={30} color="black" className="ms-2" />
                    </a>
                  </h6>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Your Message"
                        className="mb-3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
            {/* Closing the corrected div */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

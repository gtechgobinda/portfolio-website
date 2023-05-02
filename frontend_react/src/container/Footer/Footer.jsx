import { useState } from "react";
import { client } from "../../client";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./Footer.scss";

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      {/* extra social media section  start*/}
      <div className="app__social_mobile">
        <a
          href="https://www.linkedin.com/in/gtechgobinda/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsLinkedin />
          </div>
        </a>
        <a
          href="https://github.com/gtechgobinda/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsGithub />
          </div>
        </a>
        <a
          href="https://twitter.com/gtechgobinda"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsTwitter />
          </div>
        </a>
        <a
          href="https://www.instagram.com/gtechgobinda/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsInstagram />
          </div>
        </a>
        <a
          href="https://www.facebook.com/gtechgobinda/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaFacebook />
          </div>
        </a>
      </div>
      {/* extra social media section end*/}

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gobindasahaofficial@gmail.com" className="p-text">
            gobindasahaofficial@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+917407908899" className="p-text">
            +91-7407908899
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          {/* <div className="app__footer-form app__flex"> */}
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type="submit"
            className="p-text"
            // onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
          {/* </div> */}
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

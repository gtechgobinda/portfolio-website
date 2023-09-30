// import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <>
      <div className="app__social app__social-mobile">
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
            <FaXTwitter />
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
    </>
  );
};

export default SocialMedia;

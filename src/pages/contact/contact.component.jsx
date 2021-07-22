import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";
import "./contact.styles.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <p className="contact-heading">Hi !</p>
      <h3>My name is Phan Thanh Tu</h3>
      <p className="text-contact-heading">I'm a front-end Developer</p>

      <div className="contact-item-wrapper">
        <div className="contact-item">
          <a
            className="facebook"
            href="https://www.facebook.com/chophandog"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <h3>Facebook</h3>
          <p>facebook.com/chophandog</p>
        </div>

        <div className="contact-item">
          <a
            className="github"
            href="https://github.com/chophandog"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <h3>Github</h3>
          <p>github.com/chophandog</p>
        </div>

        <div className="contact-item">
          <a
            className="gmail"
            href="mailto:jobs.phanthanhtu@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail />
          </a>
          <h3>E-mail</h3>
          <p>jobs.phanthanhtu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

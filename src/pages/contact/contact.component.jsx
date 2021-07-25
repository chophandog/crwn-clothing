import React from "react";

import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";

import {
  ContactPageContainer,
  ContactHeading,
  ContactName,
  TextContactHeading,
  ContactItemWrapper,
  ContactItem,
} from "./contact.styles";

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactHeading>Hi !</ContactHeading>
      <ContactName>My name is Phan Thanh Tu</ContactName>
      <TextContactHeading>I'm a front-end Developer</TextContactHeading>

      <ContactItemWrapper>
        <ContactItem>
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
        </ContactItem>

        <ContactItem>
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
        </ContactItem>

        <ContactItem>
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
        </ContactItem>
      </ContactItemWrapper>
    </ContactPageContainer>
  );
};

export default ContactPage;

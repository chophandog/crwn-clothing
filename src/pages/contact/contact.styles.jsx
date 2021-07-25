import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;
`;

export const ContactHeading = styled.p`
  font-size: 24px;
  margin: 0;
  margin-top: 35px;
  padding: 10px 0;
`;

export const ContactName = styled.h3`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  padding: 10px 0;
`;

export const TextContactHeading = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #8b8b99;
  letter-spacing: 0.5px;
  margin: 0;
  margin-bottom: 30px;
  padding: 10px 0;
`;

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const ContactItem = styled.div`
  width: 33%;
  padding: 24px;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #8b8b99;
  }

  a {
    background-color: white;
    font-size: 60px;
    color: black;
    padding: 40px;
    border-radius: 50%;
    display: inline-block;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.2, 1.2);
    }
  }

  .facebook {
    &:hover {
      color: #365899;
    }
  }

  .github {
    &:hover {
      color: #0d2636;
    }
  }

  .gmail {
    &:hover {
      color: #ea4335;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import face from "./project_assets/face.png";

const SHeader = styled.header`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  h1 {
    font-size: 5rem;
    span {
      color: #12283A;
    }
  }
  .para-face {
    display: flex;
    justify-content: space-between;
    img {
      border-radius: 50%;
      margin-right: 50px;
      height: 300px;
      @media (max-width: 768px){
        display: none;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: space-between;
    
    }
  }

  p {
    font-size: 20px;
    width: 60%;
    line-height: 1.5;
    @media (max-width: 768px) {
      width: 95%;
      text-align: center;
      margin-top: 5vh;
    }
  }
  .contact-email {
    display: flex;

    p {
      width: fit-content;
      margin-right: 15px;
    }

    button {
      border: none;
      color: #12283A;
      padding: 5px 8px;
      font-size: 1rem;
      font-family: "Nunito";
      border-radius: 5px;
      transition: .5s;

      &:hover {
        cursor: pointer;
        background-color: #12283A;
        color: white;
      }
    }

    a {
      color: black;
      text-decoration: none;
      border-bottom: 2px solid #12283A;
      transition: 1s;

      &:hover {
        color: white;
        background: #12283A;
        padding: 5px;
      }
    }
    @media (max-width: 768px) {
      margin-top: 0;
      flex-direction: column;
      align-items: center;
      p {
        margin-bottom: 2vh;
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 5vh;
    text-align: center;
  }
`;

const Header = () => {
  const handleClipboard = () => {
    navigator.clipboard.writeText("sara.reidy.21@gmail.com");
  };

  return (
    <SHeader>
      <div className="title-badge">
        <h1>
          I'm Sara Reidy<span>.</span>
        </h1>
        {/* <Badge /> */}
      </div>
      <div className="para-face">
        <p>
          I'm a solutions-oriented software engineer with experience in multiple
          languages and frameworks. Years of experience in customer service and
          management have shaped the skills that allow me to excel as a
          developer today. I relish opportunities to learn new skills, listen to
          new perspectives, and solve difficult problems. When I'm not coding, you
          can usually find me solving a crossword puzzle or out in the woods on a 
          backcountry adventure.
        </p>
        <img src={face} alt="Sara Reidy" />
      </div>
      <div className="contact-email">
        <p>
          Let's chat!{" "}
          <a href="mailto:sara.reidy.21@gmail.com">sara.reidy.21@gmail.com</a>
        </p>
        <button onClick={handleClipboard}>Copy Email</button>
      </div>
    </SHeader>
  );
};

export default Header;

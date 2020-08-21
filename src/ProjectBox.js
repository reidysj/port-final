import React from "react";
import styled from "styled-components";


const SProjectBox = styled.div`
  margin-top: 4rem;
  border-radius: 5px;
  text-align: left;
  background: rgb(52,144,220);
  background: ${(props) =>
    props.swap
    ?"linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
    : "linear-gradient(to right, #2193b0, #6dd5ed); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"};

  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  // padding: 80px 60px;
  height: 60vh;


  &:hover{
    img{
      margin-bottom: 25px;
    }
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 5%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  .left {
    width: 40%;
    margin-left: 35px;
    .buttons{
        margin-top: 5%;
        display: flex;
        justify-content: space-evenly;

        button{
          border: 1px solid white;
          color: #162b47;
          padding: 8px 45px;
          font-size: 1rem;
          font-family: 'Nunito';
          border-radius: 5px;
          background-color: ${(props) => (props.swap ? "#3490DC" : "#1C3D5A")};
          color: white;

          &:hover{
              cursor: pointer;
          }
        }
    }
    .stack{
        margin-bottom: 5%;
        text-align: center;
        font-style: italic;
        display: flex;
        justify-content: space-evenly;
        background-color: ${(props) => (props.swap ? "#3490DC" : "#1C3D5A")};
        border-radius: 5px;
        border: 1px solid white;
        
    }
  }

  img {
    border: 1px solid white;
    height: 50%;
    // max-height: 300px;
    border-radius: 5px;
    box-shadow: 3px 13px 41px -18px rgba(255,255,255,1);
    transition: 1s;
    margin-right: 35px;
  }

  @media (max-width: 1200px){
    position: relative;
    .titles{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      width: 60%;
      position: absolute;
      left: 20%;
      top: 5%;
    }
    .left{
      margin-top: 5%;
      h3{
        margin-bottom: 5px;
      }
      .buttons{
        button{
          padding: 5px 55px;
        }
      }
    }
    img{
      margin-top: 5%;
      height: 45%;
    }
  }
  @media (max-width: 992px){
    img{
      height: 35%;
    }
    .left{
      .buttons{
        button{
          padding: 5px 35px;
        }
      }
    }
    }
  }
  @media (max-width: 768px){
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: fit-content;
    .titles{
      position: relative;
      margin: 0;
    }
    img{
      height: 250px;
      margin: 25px auto;
    }
    .left{
      width: 90%;
      margin: 15px auto;
      text-align: center;
      left: 50%;
    }
  }
  @media (max-width: 500px){
    width: 100%;
    p{
      font-size: .8rem;
    }
    img{
      height: 150px;
    }
  }
  @media (max-width: 330px){
    .stack{
      width: 250px;
      align-self: center;
    }
  }
`;

const ProjectBox = ({project}) => {

  const handleClick = (resource) => {
    window.open(resource)
  }


  return(
      <SProjectBox swap={project.swap}>
      <div className="left">
        <div className="titles">
          <h3>{project.title}</h3>
          <div className="stack">
            <p>{project.tech[0]}</p> <p>{project.tech[1]}</p> <p>{project.tech[2]}</p>
          </div>
        </div>

        <p>
       {project.desc}
        </p>
        <p>
          {project.desc2}
        </p>
        <div className="buttons">
          <button onClick={_ => handleClick(project.ghLink)}>Github</button>
          {project.liveLink && <button onClick={_ => handleClick(project.liveLink)}>Live Site</button>}
        </div>
      </div>
      <img src={project.img} alt={project.imgAlt}/>
    </SProjectBox>

  )
  

};

export default ProjectBox;

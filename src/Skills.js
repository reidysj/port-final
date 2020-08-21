import React from 'react'
import {SiJavascript, SiNodeDotJs, SiReact, SiCss3, SiPython, SiHtml5, SiGit, SiPostgresql} from 'react-icons/si'
import styled from 'styled-components'

const SkillsContainer = styled.section`
margin-top: 10vh;
font-size: 2.8rem;


.icons{
    // margin-top: 5vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 300px;
    align-content: space-evenly;
    color: #12283A;
    svg{
        width: 20%;
    }
}

h2{
    font-size: 2.5rem;
}

`



const Skills = () => {


    return(
        <SkillsContainer>
        <h2>Skills</h2>
        <div className='icons'>

        <SiJavascript />
        <SiNodeDotJs />
        <SiReact />
        <SiPython />
        <SiCss3 />
        <SiHtml5 />
        <SiGit />
        <SiPostgresql />
        </div>
        </SkillsContainer>
    )

}

export default Skills
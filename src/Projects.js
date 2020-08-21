import React from 'react'
import styled from 'styled-components'
import ProjectBox from './ProjectBox'
import {projects} from './project_assets/data'

const SProjects = styled.section`

display: flex;
flex-direction: column;
align-items: center;
h2{
    font-size: 2.5rem;
    @media (max-width: 768px){
        text-align: center;
    }
}
`

const Projects = () => {

    return(
        <>
            <h2 id='projects'>Projects</h2>
        <SProjects >
            {projects.map(project => <ProjectBox project={project}/>)}
        </SProjects>
        </>
    )
}

export default Projects
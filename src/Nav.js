import React from 'react'
import styled from 'styled-components'
import resume from './project_assets/Reidy_Resume.pdf'
import Badge from './Badge'


const SNav = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
font-size: 20px;
margin-top: 7vh;
color: #162b47;
align-items: flex-start;

.logo{
    font-size: 40px;
    span{
        color: #162b47;
    }
}

ul{
    width: 45%;
    display: flex;
    justify-content: space-between;

    li>a{
        text-decoration: none;
        color: black;
        &:visited{
            color: black;
        }
    }
    @media (max-width: 992px){
        width: 85%;
    }
    @media (max-width: 500px){
        width: 100%;
    }

}
@media (max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    ul{
        margin-top: 15px;
    }
}

@media (max-width: 450px){
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
            margin-bottom: 15px;
        }
    }
}


`
const Nav = () => {

    return(
        <SNav>
            <div className='logo'>S|<span>R</span></div>
            <ul>
                <li><a href='#projects'>Projects</a></li>
                <li><a href={resume} target='_blank' rel="noopener noreferrer">Resume</a></li>
                <Badge />
            </ul>

        </SNav>
    )
}

export default Nav
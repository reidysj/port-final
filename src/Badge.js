import React from 'react'
import styled from 'styled-components'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const SBadges = styled.span`
min-width: 150px;
display: flex;
justify-content: space-between;
font-size: 32px;
color: #162b4779;

a>svg{
    color: #162b4779;
}

svg{
    transition: .5s ease-in-out;
}
svg:hover{
    color: #12283A;
    cursor: pointer;
}
`

const Badge = () => {
    return(
        <SBadges>
            <a href='https://www.linkedin.com/in/sara-reidy/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
            <a href='https://github.com/reidysj' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
            <a href='https://twitter.com/SaraReidy' target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
        </SBadges>
    )
}

export default Badge


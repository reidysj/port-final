import React from 'react'
import styled from 'styled-components'
import resume from './project_assets/Reidy_Resume.pdf'

import Badge from './Badge'

const SFooter = styled.footer`
margin-top: 15vh;
display: flex;
justify-content: space-between;
align-items: flex-end;

.fancy-link{
    font-family: 'Nunito';
    color: black;
          text-decoration: none;
          border-bottom: 2px solid #162b47;
          transition: 1s;
          

          &:hover{
              color: white;
              background: #162b47;
              padding: 5px;
          }
}

span{
    width: 40%;
    font-size: 1.4rem;
    svg{
        border-bottom: none;
    }
}
@media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    .footer-copy{
        display: none;
    }
    .fancy-link{
        margin-bottom: 2vh;
    }
}

`

const Footer = () =>{

    return(
        <SFooter>
            <div className='footer-copy'>
                <p>©2020 Sara Reidy</p>
            </div>
                <a href={resume} target='_blank' rel="noopener noreferrer" className='fancy-link'>Ready for my resume now?</a>
            <Badge />

        </SFooter>
    )
}

export default Footer
import myschool from './images/myschool.PNG'
import conway from './images/conway.PNG'
import riders from './images/riders.PNG'

export const projects = [
    {
        title: "Conway's Game of Life",
        tech: ['React', 'Redux', 'CSS-in-JS'],
        desc: "This application provides a visualization of the rules of Conway's Game of Life.", 
        desc2: "Functioned as a solo front end developer to write an efficient algorithm and implement it within a week. Came up with and implmented additional features for a richer user experience. ",
        ghLink: 'https://github.com/reidysj/game-of-life',
        liveLink: 'https://sr-conway.netlify.app/',
        img: conway,
        imgAlt: "Conway's Game of Life Application",
        swap: true
    },
    {
        title: 'MySchool',
        tech: ['Node.js', 'React', 'AWS Amplify'],
        desc: 'MySchool is an application that aims to ease the pain that record keeping can cause for parents of homeschooled children.', 
        desc2: 'Functioned as a full stack developer on a remote, agile team of five developers and one UX designer. Focused on backend and user interface development, testing, and documentation.',
        ghLink: 'https://github.com/reidysj/My-School-FE',
        liveLink: 'https://www.myschool-v1.com/dashboard',
        img: myschool,
        imgAlt: 'MySchool Portfolio Page',
        swap: false,
    },
    {
        title: "Cherry Valley Legion Riders",
        tech: ['Node.js', 'Express', 'Redux'],
        desc: "This client wanted a solution for the problem their organization was facing with documents and tracking." ,
        desc2: "Functioned as a solo full stack developer in addition to working with the client to determine a viable solution. Architected a full stack web application based upon these conversations.",
        ghLink: 'https://github.com/reidysj/riders-BE/',
        img: riders,
        imgAlt: "Cherry Valley Riders Organizational Website",
        swap: true
    }

]
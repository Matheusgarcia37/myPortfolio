import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';


import vozdopovo_react from "../img/portImages/vozdopovo_react.png";
import happynlw from "../img/portImages/happynlw.png";
import gameplay from "../img/portImages/gameplay.png";
import proffy from "../img/portImages/proffy.png";
import vozdopovophp from "../img/portImages/vozdopovophp.png";
import myportfolio from "../img/portImages/myportfolio.png";
const portfolios = [
    {
        id: 1,
        category: 'React JS|Node.js|PostgreSQL|Typeorm|Socket IO|Express|Typescript|Styled-Components|Javascript',
        image: vozdopovo_react,
        link1: 'https://github.com/Matheusgarcia37/voz_do_povo',
        title: 'Voz do Povo',
        text: 'Built with React JS, Node.js, PostgreSQL, Typeorm and Socket IO server.'
    },
    {
        id: 2,
        category: 'React JS|React Native|Node.js|Express|PostgreSQL|Typeorm|Typescript',
        image: happynlw,
        link1: 'https://github.com/Matheusgarcia37/HappyNLW',
        title: 'Happy NLW',
        text: `This project includes the Backend, the Frontend and also the Mobile. Is an application that connects people to institutional shelters`
    },
    {
        id: 3,
        category: 'React Native|Typescript|Expo|OAuth2 Discord',
        image: gameplay,
        link1: 'https://github.com/Matheusgarcia37/gameplay',
        title: 'Gameplay NLW',
        text: 'Application to help you connect and organize the fun time and play with friends. Create groups to play your favorite games with your friends with this App that has Discord authentication.'
    },
    {
        id: 4,
        category: 'React JS|React Native|Node.js|Express|PostgreSQL|Typeorm|Typescript',
        image: proffy,
        link1: 'https://github.com/Matheusgarcia37/proffyNLW',
        title: 'Proffy NLW',
        text: `
        Proffy is an online study platform that helps people find teachers online.`
    },
    {
        id: 5,
        category: 'PHP|MySQL',
        image: vozdopovophp,
        link1: 'https://github.com/Matheusgarcia37/vozdopovoPHP',
        title: 'Voz do Povo feito PHP',
        text: 'A lower version than another developed in PHP'
    },
    {
        id: 6,
        category: 'React JS|Styled-Components|Javascript|Material UI',
        image: myportfolio,
        link1: 'https://github.com/Matheusgarcia37/myPortfolio',
        title: 'Portfolio',
        text: 'Created with React JS, Styled-Components, Javascript and Material UI Canal'
    },
]

export default portfolios;
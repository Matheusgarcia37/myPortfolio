import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Matheus Garcia</span></h1>
                <p>
                  {/* Primary text apresentation */}
                  I'm a <span>Full Stack Developer</span> who is always studying  the best technologies to develop a better and more efficient web and mobile applications. I'm <span>Computer Science</span> student at <span>Instituto Federal do Sul de Minas Gerais</span> and I'm already in the job market applying my knowledge for ten months.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/matheus-garcia-moreira-3153561a4/" className="icon i-facebook" target={'_blank'} rel="noreferrer" >
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Matheusgarcia37" className="icon i-github" target={'_blank'} rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="https://www.facebook.com/matheus.garcia.946517/" className="icon i-youtube">
                        <FacebookIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;

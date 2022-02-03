import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Matheus Garcia</span></h4>
                <p className="paragraph">
                    {/* secondy text apresentation */}
                    I'm a <span>Full Stack Developer</span> based in <span>Minas Gerais, Brazil</span>. I'm passionate about <span>Web Development</span> and <span>Mobile Development</span>. I'm always looking for new challenges and opportunities to learn new things. I'm always open to learn new technologies and technologies that can help me to grow as a developer.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Matheus Garcia Moreira</p>
                        <p>: 22</p>
                        <p>: Brazilian</p>
                        <p>: Portuguese, English </p>
                        <p>: Web & Mobile Developer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} isLink={'https://drive.google.com/file/d/1lN4hwnmLwGhUfbqwYvUbygvzJGfEjb2d/view?usp=sharing'}/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;

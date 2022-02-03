import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'April 2021 - Present, 10 months'} 
                        title={`Full Stack developer Intern`}
                        subTitle={'Ranor Software de Rastreamento'}
                        text={`I started in April 2021 doing a mandatory 140-hour internship, after that I switched to the internship
                        paid and remain until then. At the company I worked with frontend using technologies such as: ReactJs,
                        React Native, StyledComponents, CSS Sass, Ionic, Stylesheet, Vuejs and other libraries. Already in the backend I built
                        an app using: Nodejs, Sequelize, PostgreSQL and docker. In addition, I worked on other projects with
                        Apache servers using PHP and PostgreSQL.`} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Present, ending in December 2022'} 
                        title={'Computer Science Degree'}
                        subTitle={`IF Sul De Minas –
                        Campus Passos`}
                        text={'Studying 7th Period of Computer Science at the Federal Institute of Science, Education and Technology of the South of Minas Gerais, Campus Passos.'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'High School Graduation'}
                        subTitle={'EE Padre José Espíndola'}
                        text={' I graduated in the year of 2016 with a high school graduation certificate.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

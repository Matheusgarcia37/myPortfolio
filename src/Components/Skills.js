import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'React JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                         <ProgressBar 
                            title={'Next.js'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'React Native'}
                            width={'85%'}
                            text={'85%'}
                        />
                         <ProgressBar 
                            title={'Ionic'}
                            width={'72%'}
                            text={'72%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            width={'82%'}
                            text={'82%'}
                        />
                        <ProgressBar 
                            title={'PostgreSQL'}
                            width={'75%'}
                            text={'75%'}
                        />
                          <ProgressBar 
                            title={'ORMs'}
                            width={'75%'}
                            text={'75%'}
                        />
                         <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'TYPESCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'C'}
                            width={'75%'}
                            text={'75%'}
                        />
                          <ProgressBar 
                            title={'PHP'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'70%'}
                            text={'70%'}
                        />
                          <ProgressBar 
                            title={'HTTP'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'ENGLISH'}
                            width={'67%'}
                            text={'67%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;

import React, { useContext, useEffect } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/photo.jpg';

import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageType } from '../../context/LanguageContext';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    const { textData } = useLanguage();
    let text: LanguageType = textData;

    // useEffect(() => {
    //     text = textData;
    // }, [textData])
    
    const { about } = text;

    return (
        <ContainerAbout id="about">
            <Image src={photo} alt="Gabriel Viana" />

            <SubContainerAbout>
                <SubTitle>
                    {about.title}
                </SubTitle>

                <Description>
                    {about.description.t1}
                </Description>
                <Description>
                    {about.description.t2}
                </Description>
                <Description>
                    {about.description.t3}
                </Description>
                <ContainerButtons>
                    <ContactButton href="#contact">
                        <TextButton>
                            {about.navigation.contact}
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;
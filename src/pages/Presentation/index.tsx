import React, { useContext, useCallback } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import Typewriter from 'typewriter-effect';

import { ContainerPresentation, ContainerMe, TextName, SubText, Navigations, TextNavs, Imagem } from './styles';

import hiImage from '../../assets/mock/hi.png';
import Logo from '../../assets/logo_gg_sf.png';
import { useLanguage } from '../../hooks/useLanguage';
import { Header } from '../../components/Header';

interface Props {
    toggleTheme(): void;
}

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const { textData, switchLanguage } = useLanguage();

    const { presentation } = textData;

    return (
        <>
            <Header toggleTheme={toggleTheme} />
            <ContainerPresentation>
                <ContainerMe>
                    <TextName>
                        {presentation.name}
                    </TextName>
                    <SubText>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 30,
                                strings: presentation.role
                            }}
                        />
                    </SubText>

                </ContainerMe>

                <Navigations>
                    <TextNavs href="#about">{presentation.navigation.about}</TextNavs>
                    <TextNavs href="#projects">{presentation.navigation.projects}</TextNavs>
                    <TextNavs href="#contact">{presentation.navigation.contact}</TextNavs>
                </Navigations>

                <Imagem src={Logo}/>
            </ContainerPresentation >
        </>
    );
}

export default Presentation;
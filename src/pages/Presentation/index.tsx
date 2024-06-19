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

interface Props {
    toggleTheme(): void;
}

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const { textData, switchLanguage } = useLanguage();

    const { presentation } = textData;

    return (
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
                <li className='switchCenter'>
                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        offHandleColor=""
                        uncheckedHandleIcon={<FaMoon color='#2E2F31' size={20} />}
                        onHandleColor="#DCE0E2"
                        offColor="#DCE0E2"
                        onColor="#2E2F31"
                        activeBoxShadow="0 0 2px 3px #33bbff0"
                    />
                </li>
                <li className='switchCenter2'>
                    <Switch
                        onChange={(checked) => {
                            switchLanguage(checked ? 'pt' : 'en');
                        }}
                        checked={textData.language === 'pt'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        offHandleColor=""
                        // uncheckedHandleIcon={<FaMoon color='#2E2F31' size={20} />}
                        onHandleColor="#DCE0E2"
                        offColor="#DCE0E2"
                        onColor="#2E2F31"
                        activeBoxShadow="0 0 2px 3px #33bbff0"
                    />
                </li>
            </Navigations>

            <Imagem src={Logo}/>
        </ContainerPresentation >
    );
}

export default Presentation;
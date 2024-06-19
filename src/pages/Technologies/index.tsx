import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech } from './styles';

import technologiesData from '../../data/technologies';
import { textData } from '../../data/language/pt';

import photo from '../../assets/photo.png';

import { FiArrowRight } from "react-icons/fi";
import { ImRadioChecked } from "react-icons/im";

interface Props {
    toggleTheme(): void;
}

const Technologies: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    const { technologies } = textData;

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    {technologies.title}
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {technologiesData.map((item)=>{
                    const { id, name } = item;
                    return(
                        <BoxTech key={id}>
                            <ImRadioChecked color={colors.primary} size={30}/>
                            <TextTech>{name}</TextTech>
                        </BoxTech>
                    );
                })}        
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Technologies;
import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/photo.jpg';

import { FiArrowRight } from "react-icons/fi";
interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Gabriel Viana" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Como um desenvolvedor Full Stack, sou apaixonado por tecnologia e sempre motivado a criar soluções inovadoras que desafiem meus conhecimentos e habilidades. Busco aprimorar constantemente meu conhecimento e desenvolvimento profissional para oferecer soluções de alta qualidade aos meus clientes.
                </Description>
                <Description>
                    Mantenho-me atualizado com as tecnologias emergentes e tendências do setor para fornecer soluções inovadoras e eficientes. Assim estou sempre em busca de desafios e oportunidades para expandir meus conhecimentos e habilidades.
                </Description>
                <Description>
                    Meu objetivo é fornecer soluções de tecnologia de alta qualidade e atender às necessidades específicas de cada projeto em que trabalho. 
                </Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;
import { Button, Typography } from '@mui/material';
import { HeaderSC } from './headersc';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { useLanguage } from '../../hooks/useLanguage';

interface Props {
	toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);
	const { textData, switchLanguage } = useLanguage();
	
	return (
		<HeaderSC>
			<li className='switchCenter'>
				<Typography sx={{ color: title === 'light' ? '#2E2F31' : '#DCE0E2' }}>{textData.theme}:</Typography>
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
			<div id="language-center">
				<img src="/assets/flags/usa-icon.png" alt="English" />
				<Switch
					onChange={(checked) => {
						switchLanguage(checked ? 'pt' : 'en');
					}}
					checked={textData.language === 'pt'}
					checkedIcon={false}
					uncheckedIcon={false}
					handleDiameter={20}
					uncheckedHandleIcon={<MdLanguage color={`${title === 'light' ? '#DCE0E2' : '#2E2F31'}`} size={20} />}
					checkedHandleIcon={<MdLanguage color={`${title === 'light' ? '#DCE0E2' : '#2E2F31'}`} size={20} />}
					offHandleColor={`${title === 'light' ? '#2E2F31' : '#DCE0E2'}`}
					onHandleColor={`${title === 'light' ? '#2E2F31' : '#DCE0E2'}`}
					offColor={`${title === 'light' ? '#2E2F31' : '#DCE0E2'}`}
					onColor={`${title === 'light' ? '#2E2F31' : '#DCE0E2'}`}
					activeBoxShadow="0 0 2px 3px #33bbff0"
				/>
				<img src="/assets/flags/brasil-icon.png" alt="Português" />
			</div>
		</HeaderSC>
	)
}
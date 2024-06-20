import { Button } from '@mui/material';
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
			<li className='switchCenter'>
				<Switch
					onChange={(checked) => {
						switchLanguage(checked ? 'pt' : 'en');
					}}
					checked={textData.language === 'pt'}
					checkedIcon={false}
					uncheckedIcon={false}
					handleDiameter={20}
					offHandleColor=""
					uncheckedHandleIcon={<MdLanguage color='#2E2F31' size={20} />}
					checkedHandleIcon={<MdLanguage color='#2E2F31' size={20} />}
					onHandleColor="#DCE0E2"
					offColor="#2E2F31"
					onColor="#2E2F31"
					activeBoxShadow="0 0 2px 3px #33bbff0"
				/>
			</li>
		</HeaderSC>
	)
}
import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { textDataPT } from "../data/language/pt"
import { textDataEN } from '../data/language/en';
import { useNavigate } from "react-router-dom";

type LanguageNameType = 'pt' | 'en'
const languageList = ['pt', 'en']

export type LanguageType = {
	language: LanguageNameType,
	theme: string,
	presentation: {
		name: string,
		role: string[],
		navigation: {
			about: string,
			projects: string,
			contact: string
		}
	},
	about: {
		title: string,
		description: {
			t1: string,	
			t2: string,
			t3: string
		},
		navigation: {
			contact: string
		}
	},
	technologies: {
		title: string,
	},
	projects: {
		title: string,
	},
	contact: {
		title: string,
		subtitle: string,
		buttons: {
			email: string,
			phone: string,
			cv: string
		}
	}
}

const initialState: LanguageType = textDataEN;

interface LanguageContextType {
	textData: LanguageType;
	switchLanguage: (lang: LanguageNameType) => void;
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageContextProvider = (props: PropsWithChildren) => {
	const languageSelector = {
		[`${textDataEN.language}`]: textDataEN,
		[`${textDataPT.language}`]: textDataPT,
	}

	const [language, setLanguage] = useState<LanguageType>(initialState);

	useEffect(() => {
		const checkLanguage = localStorage.getItem('lang');

		if (!checkLanguage) {
			localStorage.setItem('lang', 'en');
			setLanguage(languageSelector['en']);
		}
		else if (languageList.includes(checkLanguage)) {
			setLanguage(languageSelector[checkLanguage]);
		}
		else {
			localStorage.setItem('lang', 'en');
			setLanguage(languageSelector['en']);
		}
	}, []);

	const switchLanguage = (lang: LanguageNameType) => {
		localStorage.setItem('lang', lang);
		setLanguage(languageSelector[lang]);
	}

	const contextValue: LanguageContextType = {
		textData: language,
    switchLanguage
	}

	return (
    <LanguageContext.Provider value={ contextValue } >
			{props.children}
		</LanguageContext.Provider>
  )
}
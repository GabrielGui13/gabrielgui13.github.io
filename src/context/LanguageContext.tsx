import { createContext, PropsWithChildren } from "react"
import { textDataPT } from "../data/language/pt"
import { textDataEN } from '../data/language/en';

type LanguageType = {
	language: string,
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

export const LanguageContext = createContext({} as LanguageType)

// export const LanguageContextProvider = (props: PropsWithChildren) => {
// 	return (
//     <LanguageContext.Provider value={...textDataEN}>
// 			{props.children}
// 		</LanguageContext.Provider>
//   )
// }
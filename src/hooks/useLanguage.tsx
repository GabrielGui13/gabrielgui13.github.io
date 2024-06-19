import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export const useLanguage = () => {
	const language = useContext(LanguageContext);

	return { ...language };
}
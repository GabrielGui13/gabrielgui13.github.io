import { LanguageType } from "../../context/LanguageContext"

export const textDataPT: LanguageType = {
	language: 'pt',
	presentation: {
		name: 'Gabriel Viana',
		role: ['< Desenvolvedor Full Stack />',  '< Desenvolvedor Front End />', '< Desenvolvedor Back End />'],
		navigation: {
			about: 'Sobre',
			projects: 'Projetos',
			contact: 'Contato'
		}
	},

	about: {
		title: 'Sobre mim',
		description: {
			t1: 'Como um desenvolvedor Full Stack, sou apaixonado por tecnologia e sempre motivado a criar soluções inovadoras que desafiem meus conhecimentos e habilidades. Busco aprimorar constantemente meu conhecimento e desenvolvimento profissional para oferecer soluções de alta qualidade aos meus clientes.',
			t2: 'Mantenho-me atualizado com as tecnologias emergentes e tendências do setor para fornecer soluções inovadoras e eficientes. Assim estou sempre em busca de desafios e oportunidades para expandir meus conhecimentos e habilidades.',
			t3: 'Meu objetivo é fornecer soluções de tecnologia de alta qualidade e atender às necessidades específicas de cada projeto em que trabalho.'
		},
		navigation: {
			contact: 'Contato'
		}
	},

	technologies: {
		title: 'Habilidades e tecnologias',
	},

	projects: {
		title: 'Projetos pessoais',
	},

	contact: {
		title: 'Entrar em contato',
		subtitle: 'Sinta-se à vontade para entrar em contato!',
		buttons: {
			email: 'Email',
			phone: 'Telefone',
			cv: 'Baixar Curriculo'
		}
	}
}
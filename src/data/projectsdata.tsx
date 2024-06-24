import professor from '../assets/mock/professor.png';
import orientador from '../assets/mock/orientador.png';
import pokedex from '../assets/mock/pokedex.png';
import flix from '../assets/mock/flix.png';

const ProjectsData = [
    {
        "id": 1,
        "img": professor,
        "title": "API Deploy Machine Learning ",
        "description": "API em ASP.NET Core 5 para servir um modelo ML ONNX binário de previsão de sentimentos. Deploy de um modelo binário de Machine Learning para previsão de sentimentos recebendp um texto de Input",
        "tool": "ASP.NET Core 5 · Microsoft ML",
        "github": "https://github.com/GabrielGui13/VulnerabilitiesForecastRestAPI",
        "link": "https://github.com/GabrielGui13/VulnerabilitiesForecastRestAPI"
    },
    {
        "id": 2,
        "img": professor,
        "title": "Sistema de Lista de Usuários",
        "description": "Aplicação React protegida para ler lista de usuários. Sistema com autenticação gerenciado por ContextAPI. Arquitetura e estilização de componentes por MaterialUI.",
        "tool": "React · MaterialUI",
        "github": "https://github.com/GabrielGui13/lista-de-usuarios",
        "link": "https://github.com/GabrielGui13/lista-de-usuarios"
    },
    {
        "id": 3,
        "img": professor,
        "title": "API REST Crud com NestJS",
        "description": "API Crud criada com NestJS. Uso do Prisma como ORM para integrar com PostgreSQL. Middleware de autenticação JWT.",
        "tool": "Node · NestJS · Prisma · PostgreSQL",
        "github": "https://github.com/GabrielGui13/new_things/tree/master/nest-crud-test",
        "link": "https://github.com/GabrielGui13/new_things/tree/master/nest-crud-test"
    },
    {
        "id": 4,
        "img": professor,
        "title": "Landing Page Hydra",
        "description": "Landing page desenvolvida para o bootcamp Hiring Coders. Aplicação React em página única. Componentização e estilização com Styled Components. Integração com API para envios de emails.",
        "tool": "React · Styled Components · Node",
        "github": "https://github.com/GabrielGui13/Hiring-Coders/tree/master/landingpage01",
        "link": "https://hydra-universe.netlify.app/"
    },
    {
        "id": 5,
        "img": professor,
        "title": "API GraphQL com NestJS",
        "description": "API GraphQL criada com NestJS. Uso de dados mockados para a criação de Queries e Mutations. Feito em Typescript.",
        "tool": "React · MaterialUI · Node",
        "github": "https://github.com/GabrielGui13/new_things/tree/master/nest-graphql-test",
        "link": "https://github.com/GabrielGui13/new_things/tree/master/nest-graphql-test"
    },
    {
        "id": 6,
        "img": professor,
        "title": "Portfólio Profissional",
        "description": "Criação de uma aplicação React com principais ferramentas. Gerenciamento de estado com ContextAPI. Styled components e MaterialUI para componentização.",
        "tool": "React · MaterialUI · GH Pages",
        "github": "https://github.com/GabrielGui13/gabrielgui13.github.io/tree/feat/portfolio-template",
        "link": "https://gabrielgui13.github.io"
    }
]

export default ProjectsData;
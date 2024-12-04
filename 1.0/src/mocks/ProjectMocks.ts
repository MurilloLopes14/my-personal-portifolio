interface IProject {
  id: string;
  name: string;

  image: string;
  tecnologies: string[];
  description: string;
  visualizer: string;
  code: string;
  rowReverse: boolean;
}
import Admin from "../assets/img/admin-dashboard.svg";
import Todo from "../assets/img/advanced-todo-list.svg";
import Agency from "../assets/img/agency-page.svg";
import Coffee from "../assets/img/coffee-page.svg";
import Gas from "../assets/img/gas-calculator.svg";
import Bot from "../assets/img/masterbot-openai.svg";
import Modern from "../assets/img/modern-website.svg";
import Quiz from "../assets/img/programming-quiz.svg";

export const projectsMock: IProject[] = [
  {
    id: "149880d4-3a7b-48d0-8496-d136f220c4a7",
    name: "Dashboard de Admin",
    image: Admin,
    visualizer: "https://admin-dashboard-nine-gold.vercel.app",
    tecnologies: ["SASS", "HTML5", "CSS3", "Javascript"],
    description:
      "Layout de Dashboard de Administração, construído com layout responsivo e com estilo de base utilizando o pré-processador de CSS, o SASS.",
    code: "https://github.com/MurilloLopes14/Admin_dashboard",
    rowReverse: false,
  },
  {
    id: "69e72e38-14ab-43de-91a0-db27111ccac0",
    name: "Lista de Tarefas Avançada",
    image: Todo,
    visualizer: "https://advanced-to-do-list-seven.vercel.app",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    description:
      "Lista de tarefas avançada com opções de filtro para listas, responsividade e clean code dinâmico, feito a base de vanilla JS.",
    code: "https://github.com/MurilloLopes14/Advanced-ToDo-list",
    rowReverse: true,
  },
  {
    id: "148102d6-ffc9-42ea-b56a-57c8047c0766",
    name: "Página de Agência",
    image: Agency,
    visualizer: "https://agency-page-chi.vercel.app",
    tecnologies: ["HTML5", "SASS", "CSS3", "Javascript"],
    description:
      "Layout de Página de Agência feito com SASS, HTML5 e CSS3, totalmente responsivo e semântico.",
    code: "https://github.com/MurilloLopes14/Agency_Page",
    rowReverse: false,
  },
  {
    id: "5330b001-d2b9-4d24-8cc3-bdbfce3dd380",
    name: "E-commerce de café",
    image: Coffee,
    visualizer: "https://coffee-page-one.vercel.app",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    description:
      "Layout de um e-commerce de uma loja virtual de café, totalmente responsivo e feito com JS, HTML5 e CSS3.",
    code: "https://github.com/MurilloLopes14/Coffee_page",
    rowReverse: true,
  },
  {
    id: "f7dc676d-21b7-4dc7-bc43-e87d6dfd4272",
    name: "Calculador de preços de combústível",
    image: Gas,
    visualizer: "",
    tecnologies: ["React Native", "Styled-components", "Javascript"],
    description:
      "Aplicativo que calcula o melhor preço de combústível, feito com React native, utilizando Expo CLI e Styled-Components para estilo.",
    code: "https://github.com/MurilloLopes14/Gas_Value_Calculator",
    rowReverse: false,
  },
  {
    id: "05107425-6478-4088-8a32-c940bca23903",
    name: "Master Bot",
    image: Bot,
    visualizer: "https://master-bot-open-ai-api.vercel.app",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    description:
      "Master bot IA feito com a API do ChatGPT, a OpenAI, totalmente responsivo e feito a base de Vanilla JS.",
    code: "https://github.com/MurilloLopes14/MasterBot_OpenAi_API",
    rowReverse: true,
  },
  {
    id: "cc6fed87-585b-45bb-8850-78a38d65bc60",
    name: "Website com layout moderno de web 3.0",
    image: Modern,
    visualizer: "https://modern-business-website.vercel.app",
    tecnologies: ["TailwindCSS", "React.js", "Javascript"],
    description:
      "Layout moderno de um website de negócios, feito com o processador de estilo TailwindCSS, framework React.js, e compliador de ambiente Vite",
    code: "https://github.com/MurilloLopes14/Modern_business_website",
    rowReverse: false,
  },
  {
    id: "396c50f6-2b65-40f2-aa6b-19c1a593e4cf",
    name: "Quiz de Programação",
    image: Quiz,
    visualizer: "https://programming-quiz-85euis2eg-murillolopes14.vercel.app",
    tecnologies: ["HTML5", "React.js", "Styled-components", "Javascript"],
    description:
      "Quiz de programação feito com React.js, styled-components e ContextAPI",
    code: "https://github.com/MurilloLopes14/Programming_Quiz",
    rowReverse: true,
  },
];

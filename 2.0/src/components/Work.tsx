import { ProjectCard } from "./ProjectCard";

export const Work = () => {
  const works: {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
  }[] = [
    {
      imgSrc: "/projects/coffee.png",
      title: "E-Commerce de Café (Front)",
      tags: ["Front-End", "UX", "Desenvolvimento"],
      projectLink: "https://musify-5al0.onrender.com/",
    },
    {
      imgSrc: "/projects/gas.png",
      title: "Cacluladora de valor da gasolina (Mobile)",
      tags: ["Mobile", "React Native", "UI"],
      projectLink: "https://github.com/MurilloLopes14/Gas_Value_Calculator.git",
    },
    {
      imgSrc: "/projects/modern.png",
      title: "Site moderno estilo Web 3.0",
      tags: ["Web 3.0", "Front-End", "UI", "UX"],
      projectLink: "https://modern-business-website.vercel.app/",
    },
    {
      imgSrc: "/projects/nestjs.png",
      title: "API RESTfull, consistente e dinâmica em NestJS",
      tags: ["Back-End", "Framework", "REST"],
      projectLink: "",
    },
    {
      imgSrc: "/projects/python.png",
      title: "Visualizador de datasets em pyton",
      tags: ["Back-End", "Dados", "Ciência de dados"],
      projectLink: "https://github.com/MurilloLopes14/Data_Visualization.git",
    },
    {
      imgSrc: "/projects/storage.png",
      title: "Controle de estoque para departamentos",
      tags: ["FullStack", "Integração", "Consistência"],
      projectLink: "",
    },
  ];

  return (
    <>
      {" "}
      <section className="section" id="work">
        <div className="container">
          <h2 className="headline-2 mb-8">Meus principais projetos</h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                imgSrc={imgSrc}
                key={key}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

//* Styles
import { Link } from "react-router-dom";
import { Project } from "../../components/Project/Project";
import { projectsMock } from "../../mocks/ProjectMocks";
import { ProjectsStyle } from "./ProjectsStyle";

type Props = {};

export const Projects = (props: Props) => {
  return (
    <ProjectsStyle>
      <div className="intro">
        <Link to={"/"} className="btn btn-absolute">
          Voltar
        </Link>
        <h1>Meus principais projetos</h1>
        <h3>Vai aqui uma demonstração dos projetos que já realizei:</h3>
      </div>
      <div className="projects-container">
        {projectsMock.map((item) => (
          <div className="container">
            <Project
              id={item.id}
              name={item.name}
              image={item.image}
              visualizer={item.visualizer}
              tecnologies={item.tecnologies}
              description={item.description}
              code={item.code}
              rowReverse={item.rowReverse}
            />
          </div>
        ))}
      </div>
    </ProjectsStyle>
  );
};

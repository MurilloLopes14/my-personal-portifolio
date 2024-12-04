//* Styles
import { ProjectStyle } from "./ProjectStyle";

//* React router
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  image: string;
  visualizer: string;
  tecnologies: string[];
  description: string;
  code: string;
  rowReverse: boolean;
};

export const Project = ({
  id,
  name,
  image,
  visualizer,
  tecnologies,
  description,
  code,
  rowReverse,
}: Props) => {
  let flexState: string | undefined;

  const codeLink: string = code;

  const visualizerLink: string = visualizer;

  rowReverse ? (flexState = "reverse") : (flexState = undefined);

  return (
    <ProjectStyle property={flexState}>
      <div className="image">
        {name === "Calculador de preços de combústível" ? (
          <img src={image} alt={name} />
        ) : (
          <Link to={visualizerLink} target="_blank">
            <img src={image} alt={name} title="Visualizar" />
          </Link>
        )}
      </div>
      <div className="project-description">
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>Linguagens utilizadas:</h3>
        <ul>
          {tecnologies.map((tech) => (
            <li>
              <span>→</span>
              {tech}
            </li>
          ))}
        </ul>
        <Link to={codeLink} className="btn">
          Ver código
        </Link>
      </div>
    </ProjectStyle>
  );
};

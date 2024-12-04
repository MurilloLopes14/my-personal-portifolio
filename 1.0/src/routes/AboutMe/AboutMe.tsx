//* Styles
import { AboutMeStyle } from "./AboutMeStyle";

type Props = {};

import Logo from "/assets/logo.jpeg";

import {
  AboutContent,
  SoftSkills,
  CareerContent,
  HardSkills,
  Habilities,
} from "../../mocks/AboutMeMocks";
import { Link } from "react-router-dom";

export const AboutMe = (props: Props) => {
  return (
    <AboutMeStyle>
      <Link to={"/"} className="btn">
        Voltar
      </Link>
      <div className="about-header">
        <img src={Logo} alt="Murillo Lopes" />
        <div className="titles">
          <h1>
            Murillo de Oliveira Lopes, <span>18</span>
          </h1>
          <h3>Programador Full-Stack</h3>
        </div>
      </div>
      <hr />
      <div className="description-container">
        <div className="whatAmIDoing">
          <h2>O que estou fazendo?</h2>
          <p>{AboutContent}</p>
        </div>
        <div className="careeer">
          <h2>Minha carreira até aqui!</h2>
          <p>{CareerContent}</p>
        </div>
      </div>
      <hr />
      <div className="skills">
        <div className="soft-skills">
          <h3>Habilidades sociais</h3>
          <ul>
            {SoftSkills.map((skill: string) => (
              <li>
                <span>→</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="hard-skills">
          <h3>Habilidades profissionais</h3>
          <ul>
            {HardSkills.map((skill: string) => (
              <li>
                <span>→</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="habilities">
          <h3>Habilidades de Programação</h3>
          <ul>
            {Habilities.map((skill: string) => (
              <li>
                <span>→</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AboutMeStyle>
  );
};

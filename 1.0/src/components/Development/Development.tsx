//* Styles
import { DevelopmentStyle } from "./DevelopmentStyle";

type Props = {};

//* Utils
import VScode from "../../assets/badges/vscode.svg";
import Styled from "../../assets/badges/styled-components.svg";
import Jwt from "../../assets/badges/jwt.svg";
import Typecript from "../../assets/badges/typescript.svg";
import Docker from "../../assets/badges/docker.svg";
import ReactRouterDom from "../../assets/badges/react-router.svg";
import Vite from "../../assets/badges/vite.svg";

export const Development = (props: Props) => {
  return (
    <DevelopmentStyle>
      <div className="icons">
        <img src={VScode} alt="Language" title="Visual Studio Code" />
        <img src={Styled} alt="Language" title="Styled components" />
        <img src={Jwt} alt="Language" title="JSON Web Token" />
        <img src={Typecript} alt="Language" title="Typescript" />
        <img src={Docker} alt="Language" title="Docker" />
        <img src={ReactRouterDom} alt="Language" title="React-router-dom" />
        <img src={Vite} alt="Language" title="Vite" />
      </div>
    </DevelopmentStyle>
  );
};

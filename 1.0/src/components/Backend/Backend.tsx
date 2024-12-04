//* Styles
import { BackendStyle } from "./BackendStyle";

//* Utils
import Python from "../../assets/badges/python.svg";
import Typescript from "../../assets/badges/typescript.svg";
import Javascript from "../../assets/badges/javascript.svg";
import Node from "../../assets/badges/node-js.svg";
import NestJs from "../../assets/badges/nest.svg";

type Props = {};

export const Backend = (props: Props) => {
  return (
    <BackendStyle>
      <div className="icons">
        <img src={Python} alt="Language" title="Python" />
        <img src={Typescript} alt="Language" title="Typescript" />
        <img src={Javascript} alt="Language" title="JavaScript" />
        <img src={Node} alt="Language" title="Node.js" />
        <img src={NestJs} alt="Language" title="Nest.Js" />
      </div>
    </BackendStyle>
  );
};

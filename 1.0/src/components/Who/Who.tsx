//* Styles
import { WhoStyle } from "./WhoStyle";

//* Three.js
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "../index";
import { Link } from "react-router-dom";

type Props = {};

export const Who = (props: Props) => {
  return (
    <WhoStyle>
      <div id="container">
        <div className="left-side">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className="right-side">
          <h1>Pensar fora do espaço da caixa!</h1>
          <div className="whatIDo">
            <img src="/assets/line.png" alt="line" className="line" />
            <h2>Quem eu sou?</h2>
          </div>
          <p className="description">
            Eu sou um programador apaixonado em desevolver códigos nas
            tecnologias em alta no mercado!
          </p>
          <Link to={"/projects"} className="btn">
            Meus trabalhos
          </Link>
        </div>
      </div>
    </WhoStyle>
  );
};

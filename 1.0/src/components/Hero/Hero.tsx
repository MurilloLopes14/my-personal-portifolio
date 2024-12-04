//* Styles
import { HeroStyle } from "./HeroStyle";

//* Three.js
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

//* React-router
import { Link } from "react-router-dom";

//* Components
import { Navbar } from "../index";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <HeroStyle>
      <Navbar />
      <div id="container">
        <div className="left-side">
          <h1>Pensar. Fazer. Resolver.</h1>
          <div className="whatIDo">
            <img src="/assets/line.png" alt="line" className="line" />
            <h2>O que eu faço?</h2>
          </div>
          <p className="description">
            Desenvolvedor Full-Stack e Mobile, com foco em Front-end e
            experiente com tecnologias modernas!
          </p>
          <Link to={"/aboutme"} className="btn">
            Saiba mais!
          </Link>
        </div>
        <div className="right-side">
          <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color={"rgb(8, 43, 87)"}
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src="/assets/moon.png" alt="Moon" className="moon" />
        </div>
      </div>
    </HeroStyle>
  );
};

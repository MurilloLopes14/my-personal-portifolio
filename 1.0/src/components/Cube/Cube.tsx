//* Styles
import { CubeStyle } from "./CubeStyle";

//* Hooks
import { useRef } from "react";

//* Three.js
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type Props = {};

export const Cube = (props: Props) => {
  const textRef = useRef<any>();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <color attach="background" args={["rgb(41, 168, 234)"]} />
            <Text ref={textRef} fontSize={1.4} color="#000">
              Hello world
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </>
  );
};

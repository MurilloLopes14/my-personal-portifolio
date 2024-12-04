import React from "react";
//* Components
import { Hero, Contact, Who, Works } from "../../components";
import { HomeStyle } from "./HomeStyle";

type Props = {};

export const Home = (props: Props) => {
  return (
    <HomeStyle>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </HomeStyle>
  );
};

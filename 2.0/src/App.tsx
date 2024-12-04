/*
 * @copyright 2024 Murillo Lopes
 * @license Apache-2.0
 */

import { ReactLenis } from "lenis/react";

import { About } from "./components/About";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Career />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;

//* Styles
import { WebDesignStyle } from "./WebDesignStyle";

//* Utils
import Html5 from "../../assets/badges/html5.svg";
import Css3 from "../../assets/badges/css.svg";
import Tailwind from "../../assets/badges/tailwind.svg";
import Sass from "../../assets/badges/sass.svg";
import Javascript from "../../assets/badges/javascript.svg";
import ReactJs from "../../assets/badges/react.svg";
import Vue from "../../assets/badges/vue.svg";
import Angular from "../../assets/badges/angular.svg";

type Props = {};

export const WebDesign = (props: Props) => {
  return (
    <WebDesignStyle>
      <div className="icons">
        <img src={Html5} alt="Language" title="HTML5" />
        <img src={Css3} alt="Language" title="CSS3" />
        <img src={Javascript} alt="Language" title="Javascript" />
        <img src={Tailwind} alt="Language" title="TailwindCSS" />
        <img src={Sass} alt="Language" title="SASS/SCSS" />
        <img src={ReactJs} alt="Language" title="React.js" />
        <img src={Vue} alt="Language" title="Vue.js" />
        <img src={Angular} alt="Language" title="Angular" />
      </div>
    </WebDesignStyle>
  );
};

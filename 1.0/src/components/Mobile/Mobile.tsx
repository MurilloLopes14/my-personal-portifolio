//* Styles
import { MobileStyle } from "./MobileSyle";

//* Utils
import ReactNative from "../../assets/badges/reactnative.svg";
import Expo from "../../assets/badges/expo.svg";

type Props = {};

export const Mobile = (props: Props) => {
  return (
    <MobileStyle>
      <div className="icons">
        <img src={ReactNative} alt="Language" title="React Native" />
        <img src={Expo} alt="Language" title="Expo CLI" />
      </div>
    </MobileStyle>
  );
};

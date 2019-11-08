import React from "react";
import { Defs, Line, Path, Stop, Svg } from "react-native-svg";

import { LinearGradient } from "expo-linear-gradient";
function UnionIcon() {
  return (
    <Svg width={375} height={242} viewBox="0 0 375 242" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.5 242c114.749 0 219.227-36.421 297.5-96.068V0H0v236.359C25.158 240.066 51.056 242 77.5 242z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          colors={["#7EFFD3", "#42CC9D"]}
          id="paint0_linear"
          x1="-123.049"
          y1="108.369"
          x2="102.43"
          y2="364.391"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7EFFD3" />
          <Stop offset="1" stopColor="#42CC9D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default UnionIcon;

import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Rect,
  G,
  Use
} from "react-native-svg";
import { Platform, Image, Text } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const EmailOpened = props => {
  if (Platform.OS == "android") {
    return (
      <Image
        source={require("./email-opened.png")}
        style={{ width: "85%" }}
        resizeMode={"contain"}
      />
    );
  } else {
    return (
      <Svg width="345px" height="221px" viewBox="0 0 345 221" {...props}>
        <Defs>
          <LinearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-1"
          >
            <Stop stopColor="#AF3B6E" stopOpacity={0} offset="0%" />
            <Stop stopColor="#000000" stopOpacity={0.2} offset="100%" />
          </LinearGradient>
          <Path
            d="M0,65.9023669 C51.8721119,21.9674556 78.0387786,0 78.5,0 C78.9612214,0 105.127888,21.9674556 157,65.9023669 L157,154.810651 C157,158.781219 153.785459,162 149.820122,162 L7.17987805,162 C3.2145409,162 0,158.781219 0,154.810651 L0,65.9023669 Z"
            id="path-2"
          />
          <LinearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-3"
          >
            <Stop stopColor="#FFFFFF" stopOpacity={0} offset="0%" />
            <Stop stopColor="#000000" stopOpacity={0.05} offset="100%" />
          </LinearGradient>
          <Rect
            id="path-4"
            x={11.9664634}
            y={65.9023669}
            width={133.067073}
            height={96.0976331}
            rx={7.2}
          />
          <LinearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-5"
          >
            <Stop stopColor="#E478A3" stopOpacity={0} offset="0%" />
            <Stop stopColor="#AF3B6E" stopOpacity={0.3} offset="100%" />
          </LinearGradient>
          <Path
            d="M78.5,122.218935 L157,65.9023669 L157,154.810651 C157,158.781219 153.785459,162 149.820122,162 L7.17987805,162 C3.2145409,162 0,158.781219 0,154.810651 L0,65.9023669 L78.5,122.218935 L78.5,122.218935 Z"
            id="path-6"
          />
          <LinearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-7"
          >
            <Stop stopColor="#AF3B6E" stopOpacity={0} offset="0%" />
            <Stop stopColor="#000000" stopOpacity={0.1} offset="100%" />
          </LinearGradient>
        </Defs>
        <G
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <G
            id="1.5_email_check-copy-6"
            transform="translate(-16.000000, -141.000000)"
          >
            <G id="Group" transform="translate(16.000000, 141.000000)">
              <G id="Spot-02" fill="#F2F5F9">
                <Path
                  d="M0,156.529172 C0,112.464338 22.2870296,94.0034672 77.6097561,81.5630936 C132.968118,69.3235569 140.304933,0 212.15331,0 C284.200345,0 378.886266,123.423788 331.114983,194.312076 C283.360764,265.270675 150.718217,168.473431 107.275261,200.609227 C63.7477424,232.592474 0,200.471531 0,156.529172 Z"
                  id="Details"
                />
              </G>
              <G id="Mail" transform="translate(93.000000, 30.000000)">
                <G id="Envelope">
                  <Use fill="#009799" xlinkHref="#path-2" />
                  <Use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
                </G>
                <G id="Paper">
                  <Use fill="#FFFFFF" xlinkHref="#path-4" />
                  <Use fill="url(#linearGradient-3)" xlinkHref="#path-4" />
                </G>
                <G id="Envelope">
                  <Use fill="#42CC9D" xlinkHref="#path-6" />
                  <Use fill="url(#linearGradient-5)" xlinkHref="#path-6" />
                </G>
                <Path
                  d="M0,65.9023669 L0,65.6627219 C2.02777506,63.9613633 4.01626783,62.2790364 5.98323171,60.6301775 L78.5,112.872781 L151.016768,60.6301775 C152.983732,62.2790364 154.972225,63.9613633 157,65.6627219 L157,65.9023669 L78.5,122.45858 L0,65.9023669 Z"
                  id="Sh"
                  fill="url(#linearGradient-7)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    );
  }
};

export default EmailOpened;

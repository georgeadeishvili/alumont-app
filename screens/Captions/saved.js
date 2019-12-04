import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Ellipse,
  Use,
  Rect
} from "react-native-svg";
import { Platform, Image, Text } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

const Saved = props => {
  if (Platform.OS == "android") {
    return (
      <Image
        source={require("./saved.png")}
        style={{ width: "85%" }}
        resizeMode={"contain"}
      />
    );
  } else {
    return (
      <Svg width="292px" height="183px" viewBox="0 0 292 183" {...props}>
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
            d="M16.0372703,14.1354167 L25.8929216,14.1354167 C29.7963091,14.1354167 32.9606299,10.9710959 32.9606299,7.06770833 C32.9606299,3.1643208 36.1249507,7.17040656e-16 40.0283383,0 L75.8115568,0 C79.7149443,2.83567302e-15 82.8792651,3.1643208 82.8792651,7.06770833 C82.8792651,10.9710959 86.0435859,14.1354167 89.9469734,14.1354167 L166.201575,14.1354167 C170.178025,14.1354167 173.401575,17.3589665 173.401575,21.3354167 L173.401575,130.8 C173.401575,134.77645 170.178025,138 166.201575,138 L16.0372703,138 C12.0608201,138 8.83727034,134.77645 8.83727034,130.8 L8.83727034,21.3354167 C8.83727034,17.3589665 12.0608201,14.1354167 16.0372703,14.1354167 Z"
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
          <Path
            d="M29.1737533,28.2708333 L153.065092,28.2708333 C157.041542,28.2708333 160.265092,31.4943831 160.265092,35.4708333 L160.265092,130.8 C160.265092,134.77645 157.041542,138 153.065092,138 L29.1737533,138 C25.1973031,138 21.9737533,134.77645 21.9737533,130.8 L21.9737533,35.4708333 C21.9737533,31.4943831 25.1973031,28.2708333 29.1737533,28.2708333 Z"
            id="path-4"
          />
          <LinearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            id="linearGradient-5"
          >
            <Stop stopColor="#AF3B6E" stopOpacity={0} offset="0%" />
            <Stop stopColor="#000000" stopOpacity={0.1} offset="100%" />
          </LinearGradient>
          <LinearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-6"
          >
            <Stop stopColor="#E478A3" stopOpacity={0} offset="0%" />
            <Stop stopColor="#AF3B6E" stopOpacity={0.3} offset="100%" />
          </LinearGradient>
          <Path
            d="M7.09866901,52.9479167 L174.901331,52.9479167 C178.877781,52.9479167 182.101331,56.1714665 182.101331,60.1479167 C182.101331,60.4164506 182.086308,60.6847743 182.056332,60.95163 L174.120063,131.603713 C173.7109,135.246252 170.630508,138 166.965061,138 L15.0349388,138 C11.3694923,138 8.2890997,135.246252 7.87993744,131.603713 L-0.0563323745,60.95163 C-0.500210993,57.0000319 2.34335753,53.4367939 6.29495568,52.9929153 C6.56181136,52.9629397 6.83013505,52.9479167 7.09866901,52.9479167 Z"
            id="path-7"
          />
        </Defs>
        <G
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <G
            id="1.5_email_check-copy-5"
            transform="translate(-42.000000, -162.000000)"
          >
            <G id="Group" transform="translate(42.000000, 162.000000)">
              <G id="Spot-01">
                <Path
                  d="M54.3430532,183 C29.5653706,183 3.90798311,158.428327 20.7855918,120.335607 C37.5137191,82.2096077 12.5689736,72.324191 2.25385935,48.9331514 C-8.3367085,25.7458325 19.2445846,-20.8189065 79.135506,10.4856753 C138.840933,41.7577107 144.384969,64.4657954 185.066895,53.1773533 C225.603384,41.7577107 252.706547,17.8284196 282.233276,33.4542974 C311.771588,49.0350118 260.659523,92.5068395 271.464837,117.3397 C282.197795,142.169624 311.771588,183 271.464837,183 C231.085731,183 79.0678036,183 54.3430532,183 Z"
                  id="Details"
                  fill="#F2F5F9"
                />
                <Ellipse
                  id="Details"
                  fill="#E2EAF5"
                  cx={272.466552}
                  cy={94.1214188}
                  rx={10.0171527}
                  ry={9.98635744}
                />
                <Ellipse
                  id="Details"
                  fill="#E2EAF5"
                  cx={45.5780446}
                  cy={64.9113233}
                  rx={12.5214408}
                  ry={12.4829468}
                />
                <Ellipse
                  id="Details"
                  fill="#E2EAF5"
                  cx={30.051458}
                  cy={95.3697135}
                  rx={8.76500858}
                  ry={8.73806276}
                />
                <Ellipse
                  id="Details"
                  fill="#E2EAF5"
                  cx={18.7821612}
                  cy={73.899045}
                  rx={6.26072041}
                  ry={6.2414734}
                />
              </G>
              <G id="Folder" transform="translate(55.000000, 23.000000)">
                <G>
                  <Use fill="#049396" xlinkHref="#path-2" />
                  <Use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
                </G>
                <G id="Paper">
                  <Use fill="#FFFFFF" xlinkHref="#path-4" />
                  <Use fill="url(#linearGradient-3)" xlinkHref="#path-4" />
                </G>
                <Rect
                  id="Sh"
                  fill="url(#linearGradient-5)"
                  x={8.83727034}
                  y={41.9270833}
                  width={164.564304}
                  height={11.0208333}
                />
                <G>
                  <Use fill="#42CC9D" xlinkHref="#path-7" />
                  <Use fill="url(#linearGradient-6)" xlinkHref="#path-7" />
                </G>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    );
  }
};

export default Saved;

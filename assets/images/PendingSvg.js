import React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg width={350} height={240} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M176.199 221.93c-69.033-19.154-114.108 46.638-131.85 0C26.545 175.269 0 190.365 0 165.629c0-24.788 27.596-27.881 31.764-47.616 5.623-26.565-14.161-40.92-6.892-57.199C37.678 32.149 99.986-9.276 183.69 24.877c83.697 34.152 182.203 12.906 154.623 68.879-27.574 56.106 27.58 56.106 6.892 101.521-20.563 45.238-100.241 45.784-169.006 26.653z"
      fill="#F2F5F9"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={12}
      width={350}
      height={228}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.199 221.93c-69.033-19.154-114.108 46.638-131.85 0C26.545 175.269 0 190.365 0 165.629c0-24.788 27.596-27.881 31.764-47.616 5.623-26.565-14.161-40.92-6.892-57.199C37.678 32.149 99.986-9.276 183.69 24.877c83.697 34.152 182.203 12.906 154.623 68.879-27.574 56.106 27.58 56.106 6.892 101.521-20.563 45.238-100.241 45.784-169.006 26.653z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M295.526 157.877c-.138-3.954-10.445-3.063-14.421-2.681-3.976.381-4.337-5.035-.907-5.84 3.431-.805 9.652-.39 12.875-1.133 3.223-.743-.854-4.728 3.538-5.209 4.392-.48 13.473-.035 16.18-.133 4.253-.153 6.434 4.963-1.016 5.195-2.054.064-2.466 4.609 4.469 3.361 4.352-.784 12.89-.802 14.666 1.199 1.02 1.147.666 4.231-1.086 5.933-1.301 1.265-5.44 1.512-7.062 1.804-3.804.686-3.052 4.367-1.755 5.125 3.07 1.794 11.494-1.591 11.72 3.334.099 2.176-7.566 2.527-10.708 2.501-7.709-.065-12.773.621-13.129-2.007-.356-2.638 4.79-.857 4.536-4.101-.132-1.694.223-5.295-3.079-5.106 4.521-.259-14.635 3.097-14.821-2.242z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M234.1 186.2c1.273.377 3.956-2.814 4.161-5.92.206-3.106-2.724-2.812-1.141-8.365 1.583-5.553 3.076-8.093-2.044-13.642-5.12-5.549-3.936-10.512-8.525-10.442-4.59.07-4.145 6.734-1.394 11.496 2.751 4.762 2.34 6.206-1.614 7.423-3.953 1.217 2.577 7.046 3.319 8.638.741 1.591-.132 5.596 1.372 7.601 1.504 2.006 4.594 2.835 5.866 3.211z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M233.037 178.258c-.569-1.222-2.652-4.883-5.412-6.417"
        stroke="url(#prefix__paint2_linear)"
        strokeWidth={0.63}
        strokeLinecap="round"
      />
      <Path
        d="M232.341 169.908c-.57-1.221 2.461-3.678 3.06-6.779"
        stroke="url(#prefix__paint3_linear)"
        strokeWidth={0.63}
        strokeLinecap="round"
      />
      <Path
        d="M234.745 192.863c-.243-.519-.44-3.279-.849-6.391-1.284-9.747-1.845-22.225-5.226-29.476"
        stroke="url(#prefix__paint4_linear)"
        strokeWidth={0.63}
        strokeLinecap="round"
      />
      <G opacity={0.4}>
        <Path
          d="M299.877 182.511c0-3.893 3.268-15.943 7.679-22.537"
          stroke="#A1B8E3"
          strokeWidth={0.63}
          strokeLinecap="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M305.509 161.807s.188-1.94-.791-3.635c-.979-1.694-2.213-2.815-2.755-2.502-.542.313-.188 1.941.791 3.635.979 1.695 2.755 2.502 2.755 2.502zM306.656 162.478s1.626 1.077 3.583 1.009c1.957-.069 3.526-.631 3.504-1.256-.022-.626-1.626-1.077-3.583-1.009-1.957.068-3.504 1.256-3.504 1.256zM304.543 167.432s1.567 1.161 3.525 1.195c1.958.034 3.554-.445 3.565-1.071.01-.626-1.568-1.161-3.526-1.195-1.957-.034-3.564 1.071-3.564 1.071zM302.824 172.416s1.567 1.161 3.525 1.195c1.958.034 3.554-.445 3.565-1.071.011-.626-1.568-1.16-3.525-1.195-1.958-.034-3.565 1.071-3.565 1.071zM307.937 159.232s1.815-.714 2.882-2.355c1.066-1.641 1.505-3.248.98-3.589-.525-.34-1.815.714-2.882 2.355-1.066 1.641-.98 3.589-.98 3.589zM303.249 166.85s-.186-1.94-1.471-3.417c-1.284-1.477-2.709-2.342-3.181-1.931-.473.411.186 1.941 1.47 3.418 1.285 1.476 3.182 1.93 3.182 1.93zM301.406 172.044s-.388-1.91-1.82-3.245c-1.432-1.335-2.94-2.046-3.367-1.588-.427.458.388 1.91 1.82 3.245 1.432 1.335 3.367 1.588 3.367 1.588z"
          fill="#A1B8E3"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M237.414 150.236a7.35 7.35 0 017.35-7.35h38.142a9.45 9.45 0 019.45 9.45v89.915a7.35 7.35 0 01-7.35 7.35h-40.242a7.35 7.35 0 01-7.35-7.35v-92.015z"
        fill="url(#prefix__paint5_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M232.428 150.131a7.35 7.35 0 017.35-7.35h40.242a7.35 7.35 0 017.35 7.35v92.015a7.35 7.35 0 01-7.35 7.35h-40.242a7.35 7.35 0 01-7.35-7.35v-92.015z"
        fill="url(#prefix__paint6_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M245.527 150.462c0-.435.353-.788.788-.788h27.291c.434 0 .787.353.787.788v.34a.787.787 0 01-.787.787h-27.291a.787.787 0 01-.788-.787v-.34z"
        fill="url(#prefix__paint7_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M234.732 159.359c0-.696.565-1.26 1.26-1.26h47.935c.696 0 1.26.564 1.26 1.26v73.559a1.26 1.26 0 01-1.26 1.26h-47.935a1.26 1.26 0 01-1.26-1.26v-73.559z"
        fill="url(#prefix__paint8_linear)"
      />
      <Mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={234}
        y={158}
        width={52}
        height={77}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M234.732 159.359c0-.696.565-1.26 1.26-1.26h47.935c.696 0 1.26.564 1.26 1.26v73.559a1.26 1.26 0 01-1.26 1.26h-47.935a1.26 1.26 0 01-1.26-1.26v-73.559z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__b)">
        <Rect
          opacity={0.4}
          x={238.938}
          y={198.812}
          width={40.107}
          height={2.413}
          rx={1.207}
          fill="url(#prefix__paint9_linear)"
        />
        <Rect
          opacity={0.4}
          x={238.938}
          y={202.695}
          width={28.978}
          height={2.413}
          rx={1.207}
          fill="url(#prefix__paint10_linear)"
        />
        <Path
          opacity={0.4}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M238.938 211.771c0-.667.54-1.207 1.206-1.207h36.434a1.206 1.206 0 010 2.414h-36.434a1.207 1.207 0 01-1.206-1.207z"
          fill="url(#prefix__paint11_linear)"
        />
        <Path
          opacity={0.6}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M238.938 168.303c0-1.16.94-2.1 2.099-2.1h8.513v13.57h-10.612v-11.47z"
          fill="url(#prefix__paint12_linear)"
        />
        <Mask
          id="prefix__c"
          maskUnits="userSpaceOnUse"
          x={238}
          y={166}
          width={12}
          height={14}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M238.938 168.303c0-1.16.94-2.1 2.099-2.1h8.513v13.57h-10.612v-11.47z"
            fill="#fff"
          />
        </Mask>
        <G
          mask="url(#prefix__c)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <Path
            opacity={0.7}
            d="M240.795 177.473a3.582 3.582 0 017.163 0v4.373h-7.163v-4.373z"
          />
          <Path d="M244.339 175.155a2.718 2.718 0 002.723-2.714 2.718 2.718 0 00-2.723-2.713 2.719 2.719 0 00-2.724 2.713 2.72 2.72 0 002.724 2.714z" />
        </G>
        <Path
          opacity={0.6}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M238.938 180.687h10.612v13.57h-8.093a2.52 2.52 0 01-2.519-2.52v-11.05z"
          fill="url(#prefix__paint13_linear)"
        />
        <Mask
          id="prefix__d"
          maskUnits="userSpaceOnUse"
          x={238}
          y={180}
          width={12}
          height={15}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M238.938 180.687h10.612v13.57h-8.093a2.52 2.52 0 01-2.519-2.52v-11.05z"
            fill="#fff"
          />
        </Mask>
        <G
          mask="url(#prefix__d)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <Path
            opacity={0.7}
            d="M240.795 191.957a3.582 3.582 0 117.163 0v4.373h-7.163v-4.373z"
          />
          <Path d="M244.339 189.639a2.718 2.718 0 002.723-2.714 2.718 2.718 0 00-2.723-2.714 2.72 2.72 0 00-2.724 2.714 2.72 2.72 0 002.724 2.714z" />
        </G>
        <Path
          opacity={0.6}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250.393 180.687h10.612v11.05a2.52 2.52 0 01-2.52 2.52h-8.092v-13.57z"
          fill="url(#prefix__paint14_linear)"
        />
        <Mask
          id="prefix__e"
          maskUnits="userSpaceOnUse"
          x={250}
          y={180}
          width={12}
          height={15}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M250.393 180.687h10.612v11.05a2.52 2.52 0 01-2.52 2.52h-8.092v-13.57z"
            fill="#fff"
          />
        </Mask>
        <G
          mask="url(#prefix__e)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <Path
            opacity={0.7}
            d="M252.25 191.957a3.582 3.582 0 117.164 0v4.373h-7.164v-4.373z"
          />
          <Path d="M255.794 189.639a2.72 2.72 0 002.724-2.714 2.72 2.72 0 00-2.724-2.714 2.72 2.72 0 00-2.724 2.714 2.72 2.72 0 002.724 2.714z" />
        </G>
        <Path
          opacity={0.325}
          clipRule="evenodd"
          d="M250.697 164.367c0-1.16.94-2.1 2.1-2.1h9.294c1.16 0 2.1.94 2.1 2.1v13.096a2.1 2.1 0 01-2.1 2.1h-11.394v-15.196z"
          stroke="#7188B0"
          strokeWidth={0.735}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.84 2.1"
        />
        <G
          style={{
            mixBlendMode: "multiply"
          }}
          opacity={0.3}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M257.462 167.828a.47.47 0 00-.47.471v2.148h-2.151a.47.47 0 00-.47.471v.054c0 .26.211.47.47.47h2.151v2.149c0 .26.21.47.47.47h.055c.26 0 .47-.21.47-.47v-2.149h2.151a.47.47 0 00.47-.47v-.054a.47.47 0 00-.47-.471h-2.151v-2.148a.47.47 0 00-.47-.471h-.055z"
            fill="url(#prefix__paint15_linear)"
          />
          <Path
            d="M256.992 170.447v.25h.25v-.25h-.25zm0 .995h.25v-.25h-.25v.25zm.995 0v-.25h-.25v.25h.25zm0-.995h-.25v.25h.25v-.25zm-.745-2.148a.22.22 0 01.22-.221v-.5a.72.72 0 00-.72.721h.5zm0 2.148v-2.148h-.5v2.148h.5zm-2.401.25h2.151v-.5h-2.151v.5zm-.22.221a.22.22 0 01.22-.221v-.5a.721.721 0 00-.72.721h.5zm0 .054v-.054h-.5v.054h.5zm.22.22a.22.22 0 01-.22-.22h-.5c0 .398.323.72.72.72v-.5zm2.151 0h-2.151v.5h2.151v-.5zm.25 2.399v-2.149h-.5v2.149h.5zm.22.22a.22.22 0 01-.22-.22h-.5c0 .398.322.72.72.72v-.5zm.055 0h-.055v.5h.055v-.5zm.22-.22a.22.22 0 01-.22.22v.5a.72.72 0 00.72-.72h-.5zm0-2.149v2.149h.5v-2.149h-.5zm2.401-.25h-2.151v.5h2.151v-.5zm.22-.22a.22.22 0 01-.22.22v.5a.72.72 0 00.72-.72h-.5zm0-.054v.054h.5v-.054h-.5zm-.22-.221a.22.22 0 01.22.221h.5a.721.721 0 00-.72-.721v.5zm-2.151 0h2.151v-.5h-2.151v.5zm-.25-2.398v2.148h.5v-2.148h-.5zm-.22-.221a.22.22 0 01.22.221h.5a.72.72 0 00-.72-.721v.5zm-.055 0h.055v-.5h-.055v.5z"
            fill="url(#prefix__paint16_linear)"
          />
        </G>
      </G>
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M240.514 131.104a8.08 8.08 0 018.079-8.08h68.25v16.159h-68.25a8.079 8.079 0 01-8.079-8.079z"
          fill="url(#prefix__paint17_linear)"
        />
      </G>
      <Path
        opacity={0.8}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M248.87 137.513c3.581 0 6.484-2.891 6.484-6.458 0-3.566-2.903-6.457-6.484-6.457s-6.483 2.891-6.483 6.457c0 3.567 2.902 6.458 6.483 6.458z"
        fill="url(#prefix__paint18_linear)"
      />
      <G opacity={0.9} fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M248.907 128.268a.451.451 0 00-.451.451v1.921h-1.923a.451.451 0 000 .901h1.923v1.922a.45.45 0 00.902 0v-1.922h1.923a.45.45 0 000-.901h-1.923v-1.921a.451.451 0 00-.451-.451z"
        />
        <Path d="M248.456 130.64v.25h.25v-.25h-.25zm0 .901h.25v-.25h-.25v.25zm.902 0v-.25h-.25v.25h.25zm0-.901h-.25v.25h.25v-.25zm-.652-1.921c0-.111.09-.201.201-.201v-.5a.7.7 0 00-.701.701h.5zm0 1.921v-1.921h-.5v1.921h.5zm-2.173.25h1.923v-.5h-1.923v.5zm-.201.201c0-.111.09-.201.201-.201v-.5a.701.701 0 00-.701.701h.5zm.201.2a.2.2 0 01-.201-.2h-.5a.7.7 0 00.701.7v-.5zm1.923 0h-1.923v.5h1.923v-.5zm.25 2.172v-1.922h-.5v1.922h.5zm.201.2a.2.2 0 01-.201-.2h-.5a.7.7 0 00.701.7v-.5zm.201-.2a.2.2 0 01-.201.2v.5a.7.7 0 00.701-.7h-.5zm0-1.922v1.922h.5v-1.922h-.5zm2.173-.25h-1.923v.5h1.923v-.5zm.2-.2a.2.2 0 01-.2.2v.5a.7.7 0 00.7-.7h-.5zm-.2-.201c.11 0 .2.09.2.201h.5a.701.701 0 00-.7-.701v.5zm-1.923 0h1.923v-.5h-1.923v.5zm-.25-2.171v1.921h.5v-1.921h-.5zm-.201-.201c.111 0 .201.09.201.201h.5a.701.701 0 00-.701-.701v.5z" />
      </G>
      <Path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M263.507 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
        fill="url(#prefix__paint19_linear)"
      />
      <Mask
        id="prefix__f"
        maskUnits="userSpaceOnUse"
        x={257}
        y={124}
        width={13}
        height={14}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M263.507 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
          fill="#fff"
        />
      </Mask>
      <G
        mask="url(#prefix__f)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path
          opacity={0.7}
          d="M260.152 135.116a3.39 3.39 0 116.78 0v4.161h-6.78v-4.161z"
        />
        <Path d="M263.507 132.925a2.576 2.576 0 10-2.577-2.575 2.576 2.576 0 002.577 2.575z" />
      </G>
      <Path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M278.071 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
        fill="url(#prefix__paint20_linear)"
      />
      <Mask
        id="prefix__g"
        maskUnits="userSpaceOnUse"
        x={271}
        y={124}
        width={14}
        height={14}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M278.071 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
          fill="#fff"
        />
      </Mask>
      <G
        mask="url(#prefix__g)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path
          opacity={0.7}
          d="M274.717 135.116a3.389 3.389 0 116.779 0v4.161h-6.779v-4.161z"
        />
        <Path d="M278.072 132.784a2.506 2.506 0 100-5.01 2.506 2.506 0 100 5.01z" />
      </G>
      <G opacity={0.6}>
        <Path
          opacity={0.6}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M307.259 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
          fill="url(#prefix__paint21_linear)"
        />
        <Mask
          id="prefix__h"
          maskUnits="userSpaceOnUse"
          x={300}
          y={124}
          width={14}
          height={14}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M307.259 137.513a6.46 6.46 0 006.462-6.458 6.46 6.46 0 00-6.462-6.457 6.46 6.46 0 00-6.462 6.457 6.46 6.46 0 006.462 6.458z"
            fill="#fff"
          />
        </Mask>
        <G
          mask="url(#prefix__h)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <Path
            opacity={0.7}
            d="M303.904 135.116a3.39 3.39 0 116.78 0v4.161h-6.78v-4.161z"
          />
          <Path d="M307.259 132.784a2.505 2.505 0 100-5.01 2.505 2.505 0 100 5.01z" />
        </G>
      </G>
      <G opacity={0.2} clipRule="evenodd">
        <Path
          fillRule="evenodd"
          d="M292.637 137.513a6.461 6.461 0 006.465-6.458 6.46 6.46 0 00-6.465-6.457 6.46 6.46 0 00-6.465 6.457 6.461 6.461 0 006.465 6.458z"
          fill="url(#prefix__paint22_radial)"
          fillOpacity={0.84}
        />
        <Path
          d="M292.637 137.513a6.461 6.461 0 006.465-6.458 6.46 6.46 0 00-6.465-6.457 6.46 6.46 0 00-6.465 6.457 6.461 6.461 0 006.465 6.458z"
          style={{
            mixBlendMode: "overlay"
          }}
        />
      </G>
      <Mask
        id="prefix__i"
        maskUnits="userSpaceOnUse"
        x={286}
        y={124}
        width={14}
        height={14}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M292.637 137.513a6.461 6.461 0 006.465-6.458 6.46 6.46 0 00-6.465-6.457 6.46 6.46 0 00-6.465 6.457 6.461 6.461 0 006.465 6.458z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M292.637 137.513a6.461 6.461 0 006.465-6.458 6.46 6.46 0 00-6.465-6.457 6.46 6.46 0 00-6.465 6.457 6.461 6.461 0 006.465 6.458z"
          stroke="#fff"
        />
      </Mask>
      <Path
        opacity={0.5}
        d="M291.698 131.525c2.2 1.385 10.044 9.662 6.706 14.639-3.337 4.976-6.395 8.614-16.894 2.832-10.5-5.783-24.244 6.036-24.244 17.47"
        stroke="url(#prefix__paint23_linear)"
        strokeWidth={1.47}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.15 3.88"
      />
      <G filter="url(#prefix__filter1_d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M271.489 160.988c5.22 0 9.452-4.229 9.452-9.445s-4.232-9.445-9.452-9.445-9.452 4.229-9.452 9.445 4.232 9.445 9.452 9.445z"
          fill="url(#prefix__paint24_linear)"
        />
        <Mask
          id="prefix__j"
          maskUnits="userSpaceOnUse"
          x={262}
          y={142}
          width={19}
          height={19}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M271.489 160.988c5.22 0 9.452-4.229 9.452-9.445s-4.232-9.445-9.452-9.445-9.452 4.229-9.452 9.445 4.232 9.445 9.452 9.445z"
            fill="#fff"
          />
        </Mask>
        <G
          mask="url(#prefix__j)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <Path
            opacity={0.7}
            d="M266.57 157.474a4.967 4.967 0 019.934 0v6.116h-9.934v-6.116z"
          />
          <Path d="M271.489 154.049a3.664 3.664 0 003.665-3.663 3.664 3.664 0 00-3.665-3.662 3.664 3.664 0 00-3.665 3.662 3.664 3.664 0 003.665 3.663z" />
        </G>
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M281.941 201.096c-2.814-7.606-10.55-32.656-13.325-41.695a3.388 3.388 0 012.299-4.248 3.397 3.397 0 013.922 1.623l10.72 19.465c.269-5.157 6.758-7.263 10.004-3.247l2.625 3.247c1.907-2.636 5.645-3.289 7.938-.981 1.099 1.107 2.037 2.278 2.299 3.247 0-.391.068-.758.185-1.099.944-2.758 4.796-2.264 6.812-.158 1.027 1.072 2.006 2.331 2.508 3.615 3.329 8.499 4.789 20.231 4.789 20.231v26.139l-28.702 5.277-6.136-7.563s-10.131-9.078-14.353-15.761c-2.283-4.318-6.324-15.19-8.038-19.894a3.143 3.143 0 011.116-3.621 3.17 3.17 0 014.429.698c3.091 4.25 9.122 12.507 10.908 14.725z"
        fill="url(#prefix__paint25_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M281.941 201.096c-2.814-7.606-10.55-32.656-13.325-41.695a3.388 3.388 0 012.299-4.248 3.397 3.397 0 013.922 1.623l10.72 19.465c.269-5.157 6.758-7.263 10.004-3.247l2.625 3.247c1.907-2.636 5.645-3.289 7.938-.981 1.099 1.107 2.037 2.278 2.299 3.247 0-.391.068-.758.185-1.099.944-2.758 4.796-2.264 6.812-.158 1.027 1.072 2.006 2.331 2.508 3.615 3.329 8.499 4.789 20.231 4.789 20.231v26.139l-28.702 5.277-6.136-7.563s-10.131-9.078-14.353-15.761c-2.283-4.318-6.324-15.19-8.038-19.894a3.143 3.143 0 011.116-3.621 3.17 3.17 0 014.429.698c3.091 4.25 9.122 12.507 10.908 14.725z"
        fill="url(#prefix__paint26_linear)"
        fillOpacity={0.69}
      />
      <Mask
        id="prefix__k"
        maskUnits="userSpaceOnUse"
        x={265}
        y={155}
        width={58}
        height={78}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M281.941 201.096c-2.814-7.606-10.55-32.656-13.325-41.695a3.388 3.388 0 012.299-4.248 3.397 3.397 0 013.922 1.623l10.72 19.465c.269-5.157 6.758-7.263 10.004-3.247l2.625 3.247c1.907-2.636 5.645-3.289 7.938-.981 1.099 1.107 2.037 2.278 2.299 3.247 0-.391.068-.758.185-1.099.944-2.758 4.796-2.264 6.812-.158 1.027 1.072 2.006 2.331 2.508 3.615 3.329 8.499 4.789 20.231 4.789 20.231v26.139l-28.702 5.277-6.136-7.563s-10.131-9.078-14.353-15.761c-2.283-4.318-6.324-15.19-8.038-19.894a3.143 3.143 0 011.116-3.621 3.17 3.17 0 014.429.698c3.091 4.25 9.122 12.507 10.908 14.725z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M281.941 201.096c-2.814-7.606-10.55-32.656-13.325-41.695a3.388 3.388 0 012.299-4.248 3.397 3.397 0 013.922 1.623l10.72 19.465c.269-5.157 6.758-7.263 10.004-3.247l2.625 3.247c1.907-2.636 5.645-3.289 7.938-.981 1.099 1.107 2.037 2.278 2.299 3.247 0-.391.068-.758.185-1.099.944-2.758 4.796-2.264 6.812-.158 1.027 1.072 2.006 2.331 2.508 3.615 3.329 8.499 4.789 20.231 4.789 20.231v26.139l-28.702 5.277-6.136-7.563s-10.131-9.078-14.353-15.761c-2.283-4.318-6.324-15.19-8.038-19.894a3.143 3.143 0 011.116-3.621 3.17 3.17 0 014.429.698c3.091 4.25 9.122 12.507 10.908 14.725z"
          stroke="#fff"
        />
      </Mask>
      <G mask="url(#prefix__k)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M284.358 205.321c-1.26 0-3.404-.184-5.516-3.58-2.111-3.397-6.477-13.008-6.477-13.912 0-.903 7.136 9.537 7.136 9.537s4.039 5.636 4.857 7.955z"
          fill="url(#prefix__paint27_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
          opacity={0.617}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M290.276 185.704c0-2.028-2.052-12.812-3.255-13.862-1.202-1.049-1.859 2.968-1.859 2.968s4.616 10.091 5.114 10.894z"
          fill="url(#prefix__paint28_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M300.959 182.025c0-.776-.292-7.281-1.516-8.419-1.223-1.138-1.658 1.59-1.658 1.59s1.88 3.53 2.382 4.735c.657 1.576.792 2.387.792 2.094z"
          fill="url(#prefix__paint29_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M309.462 180.546c0-.464.231-2.645-.39-3.997-.62-1.351-.812 1.066-.812 1.066s1.202 3.395 1.202 2.931z"
          fill="url(#prefix__paint30_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M284.593 205.275c-.87-3.13-4.286-16.522-8.796-23.244-4.51-6.722 5.036 17.39 5.036 17.39s2.91 4.348 3.76 5.854z"
          fill="url(#prefix__paint31_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
          opacity={0.843}
        />
        <Path
          d="M285.418 175.588s3.4 6.704 4.654 10.026"
          stroke="url(#prefix__paint32_linear)"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <Path
          d="M297.527 174.913s2.441 3.993 3.288 6.93"
          stroke="url(#prefix__paint33_linear)"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <Path
          d="M305.994 173.487s2.441 3.993 3.288 6.93"
          stroke="url(#prefix__paint34_linear)"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M269.877 161.141c-.734-2.21-1.25-2.937-1.25-3.793 0-.857.077-2.032 1.408-2.673 1.332-.64 2.854.173 3.372 1.062.517.889 1.572 2.533 1.572 3.427 0 1.68-3.976 3.511-5.102 1.977z"
          fill="url(#prefix__paint35_linear)"
        />
        <Path
          d="M281.164 199.823c.571.965 2.459 3.748 3.207 5.313"
          stroke="url(#prefix__paint36_linear)"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M270.271 163.068c.548 2.042 2.129 7.41 2.734 8.227.605.817 2.191 1.613 4.539.674 2.348-.938 3.173-2.631 2.774-3.436-.4-.806-3.828-8.043-3.828-8.043"
          fill="url(#prefix__paint37_linear)"
          style={{
            mixBlendMode: "multiply"
          }}
          opacity={0.386}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M266.75 192.667c1.227.172 2.977-.911 3.077-1.627.101-.716-1.384-4.143-1.837-4.867-.452-.723-3.224 0-2.893 1.624.33 1.625.878 2.918 1.653 4.87z"
        fill="url(#prefix__paint38_linear)"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M137.487 98.227h5.394a2.995 2.995 0 110 5.989h-5.394a2.995 2.995 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M137.487 98.227h5.394a2.995 2.995 0 110 5.989h-5.394a2.995 2.995 0 110-5.99z"
      fill="url(#prefix__paint39_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M140.184 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.19 7.19 0 00-7.192 7.188 7.19 7.19 0 007.192 7.187z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M140.184 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.19 7.19 0 00-7.192 7.188 7.19 7.19 0 007.192 7.187z"
      fill="url(#prefix__paint40_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M137.487 77.863h5.394a2.995 2.995 0 110 5.99h-5.394a2.996 2.996 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M137.487 77.863h5.394a2.995 2.995 0 110 5.99h-5.394a2.996 2.996 0 110-5.99z"
      fill="url(#prefix__paint41_linear)"
    />
    <Path fill="#403F9F" d="M137.787 14.974h4.795v152.132h-4.795z" />
    <Path
      fill="url(#prefix__paint42_linear)"
      d="M137.787 14.974h4.795v152.132h-4.795z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M197.719 98.227h5.394a2.995 2.995 0 110 5.99h-5.394a2.994 2.994 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M197.719 98.227h5.394a2.995 2.995 0 110 5.99h-5.394a2.994 2.994 0 110-5.99z"
      fill="url(#prefix__paint43_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200.416 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.189 7.189 0 00-7.191 7.188 7.189 7.189 0 007.191 7.187z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200.416 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.189 7.189 0 00-7.191 7.188 7.189 7.189 0 007.191 7.187z"
      fill="url(#prefix__paint44_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M197.719 77.863h5.394a2.996 2.996 0 110 5.99h-5.394a2.995 2.995 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M197.719 77.863h5.394a2.996 2.996 0 110 5.99h-5.394a2.995 2.995 0 110-5.99z"
      fill="url(#prefix__paint45_linear)"
    />
    <Path fill="#403F9F" d="M198.02 14.974h4.795v152.132h-4.795z" />
    <Path
      fill="url(#prefix__paint46_linear)"
      d="M198.02 14.974h4.795v152.132h-4.795z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M147.977 14.974h65.924v40.928c0 7.272-4.406 13.827-11.161 16.605-10.621 4.368-15.931 10.02-15.931 16.953 0 7.202 5.729 13.688 17.188 19.458 6.075 3.059 9.904 9.258 9.904 16.031v42.157h-65.924v-42.309c0-6.719 3.768-12.877 9.768-15.962 11.549-5.939 17.324-12.397 17.324-19.375 0-6.72-5.356-12.334-16.066-16.84-6.684-2.813-11.026-9.33-11.026-16.55V14.974z"
      fill="#F2F5F9"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M147.977 14.974h65.924v40.928c0 7.272-4.406 13.827-11.161 16.605-10.621 4.368-15.931 10.02-15.931 16.953 0 7.202 5.729 13.688 17.188 19.458 6.075 3.059 9.904 9.258 9.904 16.031v42.157h-65.924v-42.309c0-6.719 3.768-12.877 9.768-15.962 11.549-5.939 17.324-12.397 17.324-19.375 0-6.72-5.356-12.334-16.066-16.84-6.684-2.813-11.026-9.33-11.026-16.55V14.974z"
      fill="url(#prefix__paint47_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M203.769 145.638c6.141 6.576 7.135 11.137 7.135 18.473h-59.931c0-6.938.936-11.818 7.012-18.473 4.387-4.806 20.695-15.707 20.695-22.561 0-6.855-.066-36.348-.066-36.577 0-6.453-7.881-11.842-17.618-16.17-6.075-2.7-10.023-8.957-10.023-15.888V40.126c0-.005 5.976-5.687 14.983-5.687 4.673 0 9.772 3.553 14.982 6.888 4.83 3.092 9.893 5.983 14.983 5.983 10.581 0 14.983-7.214 14.983-7.184V54.28c0 6.982-4.005 13.276-10.146 15.943-9.656 4.194-17.495 9.62-17.495 16.277 0 .23-.132 29.722-.066 36.577.066 6.854 16.235 17.917 20.572 22.561z"
      fill="#E2628C"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M203.769 145.638c6.141 6.576 7.135 11.137 7.135 18.473h-59.931c0-6.938.936-11.818 7.012-18.473 4.387-4.806 20.695-15.707 20.695-22.561 0-6.855-.066-36.348-.066-36.577 0-6.453-7.881-11.842-17.618-16.17-6.075-2.7-10.023-8.957-10.023-15.888V40.126c0-.005 5.976-5.687 14.983-5.687 4.673 0 9.772 3.553 14.982 6.888 4.83 3.092 9.893 5.983 14.983 5.983 10.581 0 14.983-7.214 14.983-7.184V54.28c0 6.982-4.005 13.276-10.146 15.943-9.656 4.194-17.495 9.62-17.495 16.277 0 .23-.132 29.722-.066 36.577.066 6.854 16.235 17.917 20.572 22.561z"
      fill="url(#prefix__paint48_linear)"
    />
    <Rect
      opacity={0.3}
      x={153.969}
      y={24.856}
      width={7.192}
      height={20.963}
      rx={3.596}
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M158.764 98.227h5.394a2.995 2.995 0 110 5.99h-5.394a2.994 2.994 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M158.764 98.227h5.394a2.995 2.995 0 110 5.99h-5.394a2.994 2.994 0 110-5.99z"
      fill="url(#prefix__paint49_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M161.461 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.189 7.189 0 00-7.191 7.188 7.189 7.189 0 007.191 7.187z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M161.461 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.189 7.189 0 00-7.191 7.188 7.189 7.189 0 007.191 7.187z"
      fill="url(#prefix__paint50_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M158.764 77.863h5.394a2.996 2.996 0 110 5.99h-5.394a2.995 2.995 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M158.764 77.863h5.394a2.996 2.996 0 110 5.99h-5.394a2.995 2.995 0 110-5.99z"
      fill="url(#prefix__paint51_linear)"
    />
    <Path fill="#403F9F" d="M159.064 14.974h4.795v152.132h-4.795z" />
    <Path
      fill="url(#prefix__paint52_linear)"
      d="M159.064 14.974h4.795v152.132h-4.795z"
    />
    <Rect
      opacity={0.3}
      x={153.969}
      y={48.814}
      width={7.192}
      height={7.187}
      rx={3.594}
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M195.92 34.44c9.007 0 14.983 5.684 14.983 5.69 0-.031-4.402 7.187-14.983 7.187-5.09 0-10.152-2.9-14.982-5.99 5.21-3.332 10.309-6.888 14.982-6.888z"
      fill="#C74D75"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.491 167.106h92.894a7.488 7.488 0 017.492 7.486 7.49 7.49 0 01-7.492 7.487h-92.894a7.49 7.49 0 01-7.491-7.487 7.488 7.488 0 017.491-7.486z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.491 167.106h92.894a7.488 7.488 0 017.492 7.486 7.49 7.49 0 01-7.492 7.487h-92.894a7.49 7.49 0 01-7.491-7.487 7.488 7.488 0 017.491-7.486z"
      fill="url(#prefix__paint53_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M218.995 98.227h5.393a2.995 2.995 0 110 5.99h-5.393a2.995 2.995 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M218.995 98.227h5.393a2.995 2.995 0 110 5.99h-5.393a2.995 2.995 0 110-5.99z"
      fill="url(#prefix__paint54_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M221.692 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.19 7.19 0 00-7.192 7.188 7.19 7.19 0 007.192 7.187z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M221.692 98.227a7.19 7.19 0 007.192-7.187 7.19 7.19 0 00-7.192-7.188 7.19 7.19 0 00-7.192 7.188 7.19 7.19 0 007.192 7.187z"
      fill="url(#prefix__paint55_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M218.995 77.863h5.393a2.996 2.996 0 110 5.99h-5.393a2.996 2.996 0 110-5.99z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M218.995 77.863h5.393a2.996 2.996 0 110 5.99h-5.393a2.996 2.996 0 110-5.99z"
      fill="url(#prefix__paint56_linear)"
    />
    <Path fill="#403F9F" d="M219.295 14.974h4.795v152.132h-4.795z" />
    <Path
      fill="url(#prefix__paint57_linear)"
      d="M219.295 14.974h4.795v152.132h-4.795z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.491 0h92.894a7.49 7.49 0 017.492 7.487 7.49 7.49 0 01-7.492 7.487h-92.894A7.489 7.489 0 01127 7.487 7.489 7.489 0 01134.491 0z"
      fill="#403F9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.491 0h92.894a7.49 7.49 0 017.492 7.487 7.49 7.49 0 01-7.492 7.487h-92.894A7.489 7.489 0 01127 7.487 7.489 7.489 0 01134.491 0z"
      fill="url(#prefix__paint58_linear)"
    />
    <Defs>
      <LinearGradient
        id="prefix__paint28_linear"
        x1={285.162}
        y1={171.625}
        x2={285.162}
        y2={185.704}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint58_linear"
        x1={127}
        y1={0}
        x2={127}
        y2={14.974}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={312.591}
        y1={140.745}
        x2={296.294}
        y2={159.79}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F1F5FB" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint1_linear"
        x1={233.953}
        y1={154.612}
        x2={220.495}
        y2={168.846}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CFDDF3" />
        <Stop offset={1} stopColor="#A1B8E3" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint2_linear"
        x1={229.613}
        y1={170.914}
        x2={233.037}
        y2={178.258}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CFDDF3" />
        <Stop offset={1} stopColor="#A1B8E3" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint3_linear"
        x1={230.291}
        y1={165.512}
        x2={232.341}
        y2={169.908}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CFDDF3" />
        <Stop offset={1} stopColor="#A1B8E3" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint4_linear"
        x1={228.67}
        y1={156.996}
        x2={243.493}
        y2={188.784}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CFDDF3" />
        <Stop offset={1} stopColor="#A1B8E3" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint5_linear"
        x1={298.899}
        y1={137.072}
        x2={277.036}
        y2={151.895}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#47689B" />
        <Stop offset={1} stopColor="#223762" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint6_linear"
        x1={266.747}
        y1={108.478}
        x2={188.989}
        y2={142.459}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#47689B" />
        <Stop offset={1} stopColor="#223762" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint7_linear"
        x1={250.087}
        y1={153.276}
        x2={288.461}
        y2={153.276}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#365383" />
        <Stop offset={1} stopColor="#1C2C4C" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint8_linear"
        x1={247.817}
        y1={179.422}
        x2={228.058}
        y2={201.391}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#EEF2F9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint9_linear"
        x1={327.954}
        y1={204.503}
        x2={327.822}
        y2={197.207}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint10_linear"
        x1={303.253}
        y1={208.385}
        x2={303.071}
        y2={201.092}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint11_linear"
        x1={325.157}
        y1={216.254}
        x2={325.021}
        y2={208.959}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint12_linear"
        x1={244.244}
        y1={162.107}
        x2={235.288}
        y2={173.709}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint13_linear"
        x1={244.244}
        y1={176.591}
        x2={235.288}
        y2={188.193}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint14_linear"
        x1={255.699}
        y1={176.591}
        x2={246.743}
        y2={188.193}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint15_linear"
        x1={257.49}
        y1={165.947}
        x2={253.728}
        y2={172.182}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint16_linear"
        x1={257.49}
        y1={165.947}
        x2={253.728}
        y2={172.182}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint17_linear"
        x1={424.071}
        y1={160.615}
        x2={425.976}
        y2={113.627}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#D4E1F8" stopOpacity={0.01} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint18_linear"
        x1={248.297}
        y1={106.484}
        x2={229.859}
        y2={131.704}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DDFFB1" />
        <Stop offset={0.534} stopColor="#5CDB8E" />
        <Stop offset={1} stopColor="#19AC61" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint19_linear"
        x1={263.214}
        y1={122.857}
        x2={256.516}
        y2={134.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint20_linear"
        x1={277.778}
        y1={122.857}
        x2={271.081}
        y2={134.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint21_linear"
        x1={306.966}
        y1={122.857}
        x2={300.268}
        y2={134.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint57_linear"
        x1={219.295}
        y1={14.974}
        x2={219.295}
        y2={167.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint23_linear"
        x1={278.243}
        y1={181.836}
        x2={307.795}
        y2={141.504}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint24_linear"
        x1={275.764}
        y1={165.194}
        x2={285.884}
        y2={149.033}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9D61" />
        <Stop offset={1} stopColor="#FFD873" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint25_linear"
        x1={250.89}
        y1={182.732}
        x2={290.149}
        y2={190.514}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint26_linear"
        x1={284.942}
        y1={200.878}
        x2={298.344}
        y2={210.487}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3879EE" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#003B9D" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint27_linear"
        x1={272.365}
        y1={187.757}
        x2={272.365}
        y2={205.321}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint56_linear"
        x1={215.998}
        y1={77.863}
        x2={215.998}
        y2={83.852}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint29_linear"
        x1={297.785}
        y1={173.271}
        x2={297.785}
        y2={182.084}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint30_linear"
        x1={308.26}
        y1={176.064}
        x2={308.26}
        y2={180.602}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint31_linear"
        x1={274.35}
        y1={180.565}
        x2={274.35}
        y2={205.275}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint32_linear"
        x1={285.418}
        y1={175.588}
        x2={285.418}
        y2={185.614}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D73CA" />
        <Stop offset={1} stopColor="#063F9A" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint33_linear"
        x1={297.527}
        y1={174.913}
        x2={297.527}
        y2={181.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D73CA" />
        <Stop offset={1} stopColor="#063F9A" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint34_linear"
        x1={305.994}
        y1={173.487}
        x2={305.994}
        y2={180.417}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D73CA" />
        <Stop offset={1} stopColor="#063F9A" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint35_linear"
        x1={268.627}
        y1={154.446}
        x2={268.627}
        y2={161.717}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9E7FA" />
        <Stop offset={1} stopColor="#B1CAF2" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint36_linear"
        x1={281.164}
        y1={199.823}
        x2={281.164}
        y2={205.136}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D73CA" />
        <Stop offset={1} stopColor="#063F9A" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint37_linear"
        x1={271.278}
        y1={167.064}
        x2={274.593}
        y2={172.92}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#70B8F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#3D82F0" stopOpacity={0.527} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint38_linear"
        x1={265.328}
        y1={185.606}
        x2={264.382}
        y2={192.334}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9E7FA" />
        <Stop offset={1} stopColor="#B1CAF2" />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint39_linear"
        x1={134.49}
        y1={98.227}
        x2={134.49}
        y2={104.216}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint40_linear"
        x1={132.992}
        y1={83.852}
        x2={132.992}
        y2={98.227}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint41_linear"
        x1={134.49}
        y1={77.863}
        x2={134.49}
        y2={83.852}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint42_linear"
        x1={137.787}
        y1={14.974}
        x2={137.787}
        y2={167.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint43_linear"
        x1={194.723}
        y1={98.227}
        x2={194.723}
        y2={104.216}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint44_linear"
        x1={193.225}
        y1={83.852}
        x2={193.225}
        y2={98.227}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint45_linear"
        x1={194.723}
        y1={77.863}
        x2={194.723}
        y2={83.852}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint46_linear"
        x1={198.02}
        y1={14.974}
        x2={198.02}
        y2={167.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint47_linear"
        x1={114.311}
        y1={87.792}
        x2={226.942}
        y2={137.641}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F2F5F9" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#403F9F" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint48_linear"
        x1={150.973}
        y1={34.439}
        x2={150.973}
        y2={164.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E2628C" stopOpacity={0.01} />
        <Stop offset={1} stopColor="#C74D75" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint49_linear"
        x1={155.768}
        y1={98.227}
        x2={155.768}
        y2={104.216}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint50_linear"
        x1={154.27}
        y1={83.852}
        x2={154.27}
        y2={98.227}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint51_linear"
        x1={155.768}
        y1={77.863}
        x2={155.768}
        y2={83.852}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint52_linear"
        x1={159.064}
        y1={14.974}
        x2={159.064}
        y2={167.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint53_linear"
        x1={127}
        y1={167.106}
        x2={127}
        y2={182.079}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint54_linear"
        x1={215.998}
        y1={98.227}
        x2={215.998}
        y2={104.216}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="prefix__paint55_linear"
        x1={214.5}
        y1={83.852}
        x2={214.5}
        y2={98.227}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#403F9F" stopOpacity={0.01} />
        <Stop offset={1} stopOpacity={0.2} />
      </LinearGradient>
      <RadialGradient
        id="prefix__paint22_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(116.791 108.86 154.98) scale(11.037 20.5633)"
      >
        <Stop stopColor="#CBDAF1" />
        <Stop offset={1} stopColor="#7089B9" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;

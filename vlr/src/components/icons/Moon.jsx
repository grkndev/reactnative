import React from "react";
import Svg, { Path } from "react-native-svg";
const Moon = ({ w = 24, h = 24, f = "#fff", activated = false }, ...props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      {...props}
    >
      {activated ? (
        <>
          <Path
            fill={f}
            d="M22.16 12.08c0 5.567-4.513 10.08-10.08 10.08S2 17.647 2 12.08 6.513 2 12.08 2a9.39 9.39 0 0 1 2.2.25 6.17 6.17 0 1 0 7.63 7.63c.17.721.254 1.46.25 2.2Z"
          />
        </>
      ) : (
        <>
          <Path
            fill={f}
            fillRule="evenodd"
            d="M2 12.08C2 6.513 6.513 2 12.08 2a9.39 9.39 0 0 1 2.2.25 6.17 6.17 0 1 0 7.63 7.63c.17.721.254 1.46.25 2.2 0 5.567-4.513 10.08-10.08 10.08S2 17.647 2 12.08Zm8.543 1.536A7.67 7.67 0 0 1 9.64 3.85a8.58 8.58 0 1 0 10.67 10.66 7.67 7.67 0 0 1-9.767-.894Z"
            clipRule="evenodd"
          />
        </>
      )}
    </Svg>
  );
};

export default Moon;

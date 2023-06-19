import React from "react";
import Svg, { Path } from "react-native-svg";
const Home = ({ w = 24, h = 24, f = "#fff", activated = false }, ...props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      {...props}
    >
      {activated ? (
        <Path
          fill={f}
          fillRule="evenodd"
          d="m14.454 3.803 5.002 3.695A3.733 3.733 0 0 1 21 10.5v6.688a3.903 3.903 0 0 1-3.988 3.79H6.998A3.903 3.903 0 0 1 3 17.189v-6.688a3.733 3.733 0 0 1 1.544-3.003l5.002-3.695a4.15 4.15 0 0 1 4.908 0ZM7.737 16.972h8.526a.71.71 0 1 0 0-1.421H7.737a.71.71 0 1 0 0 1.42Z"
          clipRule="evenodd"
        />
      ) : (
        <Path
          fill={f}
          fillRule="evenodd"
          d="m20.29 7-5.56-4.11a4.63 4.63 0 0 0-5.46 0L3.72 7A4.14 4.14 0 0 0 2 10.34v7.43A4.34 4.34 0 0 0 6.44 22h11.12A4.34 4.34 0 0 0 22 17.77v-7.44A4.15 4.15 0 0 0 20.29 7Zm.21 10.77a2.84 2.84 0 0 1-2.94 2.73H6.44a2.85 2.85 0 0 1-2.94-2.73v-7.43A2.65 2.65 0 0 1 4.61 8.2l5.55-4.1a3.12 3.12 0 0 1 3.68 0l5.55 4.11a2.61 2.61 0 0 1 1.11 2.12v7.44Zm-13-2.02h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5Z"
          clipRule="evenodd"
        />
      )}
    </Svg>
  );
};

export default Home;

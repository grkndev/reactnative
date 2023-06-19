import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Calendar = (
  { w = 24, h = 24, f = "#fff", activated = false },
  ...props
) => (
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
      fillRule="evenodd"
      d="M16.9 3.57h.1a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h.1V1.75a.75.75 0 0 1 1.5 0v1.82h6.8V1.75a.75.75 0 0 1 1.5 0v1.82ZM7.5 9.66h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    /></>
    ) : (
      <>
        <Path
          fill={f}
          d="M16.5 8.16h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5Z"
        />
        <Path
          fill={f}
          fillRule="evenodd"
          d="M16.89 3.57H17a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h.09V1.75a.75.75 0 0 1 1.5 0v1.82h6.8V1.75a.75.75 0 0 1 1.5 0v1.82Zm.11 17.5a3.5 3.5 0 0 0 3.5-3.5v-9a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5v9a3.5 3.5 0 0 0 3.5 3.5h10Z"
          clipRule="evenodd"
        />
      </>
    )}
  </Svg>
);
export default Calendar;

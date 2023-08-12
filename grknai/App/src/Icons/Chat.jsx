import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ className }) => (
  <View className={className}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <Path
        fill="#1CCB77"
        fillRule="evenodd"
        d="M7.917 1.85a8.208 8.208 0 0 1 1.725-.183 8.009 8.009 0 0 1 7.975 9.083c-.5 3.834-4.284 6.933-8.15 6.933h-5.55a1.342 1.342 0 0 1-1.184-1.974l.225-.434a1.325 1.325 0 0 0-.041-1.325 8 8 0 0 1 5-12.1ZM9.4 16.425a7.142 7.142 0 0 0 6.908-5.833 6.667 6.667 0 0 0-1.591-5.367 6.75 6.75 0 0 0-5.075-2.308 7.385 7.385 0 0 0-1.467.15 6.758 6.758 0 0 0-4.25 10.2c.499.783.534 1.775.092 2.591l-.225.425a.083.083 0 0 0 0 .092c.033.05.083.05.083.05H9.4Z"
        clipRule="evenodd"
      />
    </Svg>
  </View>
);
export default SvgComponent;

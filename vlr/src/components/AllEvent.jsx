import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
import Icons from "./icons";
import { useColorScheme } from "nativewind";

const Rank = ({type}, ...props) => {


  const matchesData = [
    {
      name: "CHAMPIONS",
      img: require("../assest/events/ch.png"),
      location: "San Francisco, CA",
      type:0
    },
    {
      name: "MASTERS",
      img: require("../assest/events/masters.png"),
      location: "Tokyo, Japan",
      type:0
    },
    {
      name: "EMEA: LCQ",
      img: require("../assest/events/emea.png"),
      location: "EMEA",
      type:1
    },
    {
      name: "AMERICAS: LCQ",
      img: require("../assest/events/am.png"),
      location: "AMERICAS",
      type:2
    },
    {
      name: "PACIFIC: LCQ",
      img: require("../assest/events/pf.png"),
      location: "PACIFIC",
      type:3
    },
    {
      name: "CHINA: QUALIFIER",
      img: require("../assest/events/cn.png"),
      location: "CHINA",
      type:4
    },

    // Diğer maç verileri buraya eklenebilir
  ];
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const renderItem = ({ item, index }) => (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#DCDCDC",
      }}
      className="items-center overflow-hidden w-96 justify-center p-2 m-2 rounded h-[145px]"
    >
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex flex-row z-50">
          <View className="flex-col items-start z-50">
            <Text className="text-black text-xl dark:text-white text-center ml-2 font-normal font-montbold">
              {item.name}
            </Text>
            <Text className="text-gray-400 dark:text-gray-500 text-center ml-2 font-normal font-montbold">
              {item.location}
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center z-0">
          <Image
            source={item.img}
            className=" w-[100px] h-[100px] justify-end items-end z-0"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
  return (
    
    <View className={"mt-4 top-5"} {...props}>
      <View className="h-[620px] mb-10 flex justify-center items-center">
        <FlatList
          data={type >= 0 ? matchesData.filter((item) => item.type == type) : matchesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Rank;

import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
import Icons from "./icons";
import { useColorScheme } from "nativewind";
const Rank = (props) => {
  const matchesData = [
    {
      name: "FNATIC",
      img: require("../assest/teams/fnc.png"),
      views: 500,
    },
    {
      name: "TEAM LIQUID",
      img: require("../assest/teams/tl.png"),
      views: 500,
    },
    {
      name: "NATUS VINCERE",
      img: require("../assest/teams/navi.png"),
      views: 500,
    },
    {
      name: "G2 ESPORTS",
      img: require("../assest/teams/pr.png"),
      views: 500,
    },
    {
      name: "GAMBIT ESPORTS",
      img: require("../assest/teams/bbl.png"),
      views: 500,
    },
    {
      name: "FUT ESPORTS",
      img: require("../assest/teams/tl.png"),
      views: 500,
    },
    {
      name: "BBL ESPORTS",
      img: require("../assest/teams/bbl.png"),
      views: 500,
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
        <View className="flex flex-row items-center z-50">
          <Text className="text-2xl dark:text-white font-montbold m-4">#{index + 1}</Text>
          <View className="flex-col z-50">
            <Text className="text-black text-xl dark:text-white text-center ml-2 font-normal font-montbold">
              {item.name}
            </Text>
            <Text className="text-black dark:text-white text-center ml-2 font-normal font-montbold">
              {item.views} Puan
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
    <View className={"mt-4"} {...props}>
      <Text
        className={
          "text-black dark:text-white text-lg mb-2 ml-4 font-normal font-montbold"
        }
      >
        En iyiler 
      </Text>

      <View className="h-[620px] mb-10 flex justify-center items-center">
        <FlatList
          data={matchesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Rank;

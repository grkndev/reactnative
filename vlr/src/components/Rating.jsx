import React from "react";
import { View, Text, Image, FlatList, Dimensions } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
import Icons from "./icons";
import { useColorScheme } from "nativewind";
const Rating = (props) => {
  const screenHeight = Dimensions.get("window").height;
  const elementHeight = Math.round(screenHeight);
  
  const matchesData = [
    {
      name: "valorant",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "valorant_emea",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "valorant_tur",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "wtcn",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "wtcn",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "wtcn",
      img: require("../assest/events/masters.png"),
      views: 500,
    },
    {
      name: "wtcn",
      img: require("../assest/events/masters.png"),
      views: 500,
    },

    // Diğer maç verileri buraya eklenebilir
  ];
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#DCDCDC",
      }}
      className="items-center justify-center p-2 m-2 rounded-lg w-[385px] h-[45px]"
    >
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex flex-row items-center">
          <Image
            source={item.img}
            className="w-[20px] h-[20px]"
            resizeMode="contain"
          />
          <Text className="text-black dark:text-white text-center ml-2 font-normal font-montbold">
            {item.name}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Icons.Eye
            w={12}
            h={12}
            f={colorScheme === "dark" ? "#fff" : "#000"}
          />
          <Text className="text-black dark:text-white text-center ml-1 font-normal font-montbold">
            {item.views}k
          </Text>
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
        Canlı Yayınlar
      </Text>

      <View className={`h-64 flex justify-center items-center`}>
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

export default Rating;

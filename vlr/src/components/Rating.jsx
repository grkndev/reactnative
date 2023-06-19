import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
const Rating = (props) => {
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
    
    // Diğer maç verileri buraya eklenebilir
  ];
  const renderItem = ({ item }) => (
    <View className="items-center justify-center p-2 m-2 bg-[#DCDCDC] rounded-lg w-[385px] h-[45px]">
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex flex-row items-center">
          <Image
            source={item.img}
            className="w-[20px] h-[20px]"
            resizeMode="contain"
          />
          <Text className="text-black text-center ml-2 font-normal font-montbold">
            {item.name}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            fill="none"
          >
            <Path
              fill="#000"
              fillRule="evenodd"
              d="M4.563 6.074c0-.772.596-1.398 1.331-1.398.736 0 1.332.626 1.332 1.398 0 .772-.596 1.398-1.332 1.398-.735 0-1.331-.626-1.331-1.398Zm.868 0c0 .269.208.486.463.486a.475.475 0 0 0 .464-.486.475.475 0 0 0-.464-.486.475.475 0 0 0-.463.486Z"
              clipRule="evenodd"
            />
            <Path
              fill="#000"
              fillRule="evenodd"
              d="m8.621 3.503 2.42 2.03c.157.131.248.33.248.541 0 .21-.091.41-.248.541l-2.42 2.03a4.21 4.21 0 0 1-5.453 0l-2.42-2.03A.707.707 0 0 1 .5 6.074c0-.21.091-.41.248-.541l2.42-2.03a4.21 4.21 0 0 1 5.453 0ZM3.706 7.965a3.384 3.384 0 0 0 4.377 0l2.211-1.891-2.211-1.86a3.384 3.384 0 0 0-4.377 0l-2.212 1.86 2.212 1.89Z"
              clipRule="evenodd"
            />
          </Svg>
          <Text className="text-black text-center ml-1 font-normal font-montbold">
            {item.views}k
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View className={"mt-4 full"} {...props}>
      <Text
        className={"text-black text-lg mb-2 ml-4 font-normal font-montbold"}
      >
        Canlı Yayınlar
      </Text>

      <FlatList
        horizontal={false}
        data={matchesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Rating;

import React from "react";
import { View, Text, Image, FlatList } from "react-native";
const Matches = (props) => {
  const matchesData = [
    {
      id: 1,
      bg: require("../assest/events/masters.jpg"),
    },
    {
      id: 2,
      bg: require("../assest/events/ch23.jpg"),
    },

    // Diğer maç verileri buraya eklenebilir
  ];
  const renderItem = ({ item }) => (
    <View className={`flex-col items-center justify-between mx-2 bg-mor rounded-lg w-[250px] h-[120px]`}>
      <Image className="w-full h-full rounded-lg" source={item.bg}></Image>
    </View>
  );
  return (
    <View className={"mt-4"} {...props}>
      <Text
        className={"text-black dark:text-white text-lg mb-2 ml-4 font-normal font-montbold"}
      >
        ETKİNLİKLER
      </Text>
      <FlatList
        data={matchesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Matches;

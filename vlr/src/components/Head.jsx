import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icons from "./icons";

const Head = ({username}) => {
  return (
    
      <View className={"h-16 flex-row justify-between items-center p-4"}>
        <View className={"flex-row items-center"}>
          <View className="bg-mor rounded-full w-14 h-14 justify-center items-center">
            <Image
              source={require("../assest/profile.jpg")}
              className={"w-12 h-12 rounded-full"}
              resizeMode="cover"
            />
          </View>
          <View className={"ml-2 text-black"}>
            <Text className={"text-xs font-semibold text-mor"}>Hoşgeldin,</Text>
            <Text className={"text-lg font-normal font-montbold"}>{username}</Text>
          </View>
        </View>
        <TouchableOpacity className={"bg-black rounded-full px-2 py-2"}>
          <Icons.Moon />
        </TouchableOpacity>
      </View>
    
  );
};

export default Head;

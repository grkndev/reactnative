import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icons from "./icons";
import { useColorScheme } from "nativewind"
const Head = ({username}) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    
      <View className={"h-16 flex-row justify-between items-center p-4 dark:bg-black"}>
        <View className={"flex-row items-center align-middle text-center"}>
          
          
            <Text className={"text-mor font-valo text-4xl"}>vALO</Text>
            <Text className={"dark:text-white font-montbold text-3xl -top-[2px]"}>TOUR</Text>
          
        </View>
        <TouchableOpacity onPress={toggleColorScheme} className={"bg-black dark:bg-white rounded-full px-2 py-2"}>
          {
            colorScheme === "dark" ? <Icons.Sun f="#000" activated /> : <Icons.Moon />
          }
        </TouchableOpacity>
      </View>
    
  );
};

export default Head;

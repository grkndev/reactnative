import React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-navigation";
const Brackets = (
  {
    week = "SEMI-FINAL",
    event = "VALORANT MASTERS 2023: TOKYO",
    team1 = { name: "FNC", logo: require("../assest/teams/fnc.png") },
    team2 = { name: "TL", logo: require("../assest/teams/tl.png") },
    score = "0 - 0",
    live = false,
    status = "UPCOMING",
  },
  ...props
) => {
  return (
    <SafeAreaView>
      <View
        className={
          "flex justify-center items-center mt-10 box-border w-36 h-[110px] bg-[#2E325C] border-solid border-[5px] border-[#3E426B] rounded-[15px]"
        }
      >
        <View
          className={
            "flex flex-col justify-start items-start rounded-[15px] w-full h-full "
          }
        >
          {/* WEEK */}
          <View
            className={
              "flex flex-row items-center py-2 px-4 w-full  bg-[#323662] rounded-t-lg  "
            }
          >
            <Text className="w-full font-mont text-white text-center">
              {week}
            </Text>
          </View>
          {/* TEAM 1 */}
          <View className="flex flex-row bg-green-800 p-1 border-solid border-[2px] border-[#3E426B] w-full rounded-t-lg">
            <View className="flex flex-row justify-start items-start">
              <Image
                source={team1.logo}
                className="w-[20px] h-[20px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold ml-2">
                {team1.name}
              </Text>
            </View>
            <View className="justify-end items-end ml-8">
              <Text className="text-white text-right font-montbold ml-2">
                2
              </Text>
            </View>
          </View>

          {/* TEAM 1 */}
          <View className="flex flex-row  p-1 border-solid border-[2px] border-[#3E426B] w-full rounded-b-lg">
            <View className="flex flex-row justify-start items-start">
              <Image
                source={team1.logo}
                className="w-[20px] h-[20px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold ml-2">
                {team1.name}
              </Text>
            </View>
            <View className="justify-end items-end ml-8">
              <Text className="text-white text-right font-montbold ml-2">
                0
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        className={
          "flex justify-center items-center mt-10 box-border w-36 h-[110px] bg-[#2E325C] border-solid border-[5px] border-[#3E426B] rounded-[15px]"
        }
      >
        <View
          className={
            "flex flex-col justify-start items-start rounded-[15px] w-full h-full "
          }
        >
          {/* WEEK */}
          <View
            className={
              "flex flex-row items-center py-2 px-4 w-full  bg-[#323662] rounded-t-lg  "
            }
          >
            <Text className="w-full font-mont text-white text-center">
              {week}
            </Text>
          </View>
          {/* TEAM 1 */}
          <View className="flex flex-row bg-green-800 p-1 border-solid border-[2px] border-[#3E426B] w-full rounded-t-lg">
            <View className="flex flex-row justify-start items-start">
              <Image
                source={team1.logo}
                className="w-[20px] h-[20px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold ml-2">
                {team1.name}
              </Text>
            </View>
            <View className="justify-end items-end ml-8">
              <Text className="text-white text-right font-montbold ml-2">
                2
              </Text>
            </View>
          </View>

          {/* TEAM 1 */}
          <View className="flex flex-row  p-1 border-solid border-[2px] border-[#3E426B] w-full rounded-b-lg">
            <View className="flex flex-row justify-start items-start">
              <Image
                source={team1.logo}
                className="w-[20px] h-[20px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold ml-2">
                {team1.name}
              </Text>
            </View>
            <View className="justify-end items-end ml-8">
              <Text className="text-white text-right font-montbold ml-2">
                0
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Brackets;

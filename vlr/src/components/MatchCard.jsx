import React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
const Matches = (
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
    <View
      className={
        "flex mt-4 box-border w-full h-[200px] bg-mor/75 border-solid border-[5px] border-mor/50 rounded-[15px]"
      }
    >
      <View
        className={"flex flex-col justify-between items-center rounded-[15px]"}
      >
        {/* WEEK */}
        <View
          className={
            "flex flex-row items-center py-2 px-4 w-full  bg-mor/50 rounded-t-lg  "
          }
        >
          <Text className="w-full font-mont text-white text-center">
            {week}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-center bg-mor/25 w-full h-[120px]">
          <View className="flex flex-row items-center justify-center w-full gap-12 ">
            {/* TEAM 1 */}
            <View className="flex flex-col items-center justify-center">
              <Image
                source={team1.logo}
                className="w-[50px] h-[50px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold">{team1.name}</Text>
            </View>

            {/* SCORE BOARD */}
            <View className="flex flex-col items-center justify-center">
              <Text className="text-white text-center text-2xl font-montbold">
                {score}
              </Text>
              <Text className={"text-white py-1 px-2 rounded text-center text-xs font-montbold " + (live?"bg-red-500":"bg-mor/100")}>
                {status}
              </Text>
            </View>

            {/* TEAM 2 */}
            <View className="flex flex-col items-center justify-center">
              <Image
                source={team2.logo}
                className="w-[50px] h-[50px]"
                resizeMode="contain"
              />
              <Text className="text-white text-center font-montbold">
                {team2.name}
              </Text>
            </View>
          </View>
        </View>

        {/* EVENT */}
        <View
          className={
            "flex items-center py-2 px-4 w-full  bg-mor/50 rounded-b-lg"
          }
        >
          <Text className="w-full font-montbold text-xs text-center text-white">
            {event}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Matches;

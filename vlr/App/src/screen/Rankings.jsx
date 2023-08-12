import React from "react";
import Head from "../components/Head";
import Matches from "../components/Matches";
import Events from "../components/Events";
import Rank from "../components/Rank";
import { useColorScheme } from "nativewind";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const Rankings = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View style={styles.root} className={"flex-1 pt-10 dark:bg-black"}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Head username={"Gürkan"} />
      
        <View className="flex">
          <Rank className="top-5 " />
        </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    fontFamily: "Montserrat",
  },
});
export default Rankings;

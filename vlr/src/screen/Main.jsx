import React from "react";
import Head from "../components/Head";
import Matches from "../components/Matches";
import Events from "../components/Events";
import Rating from "../components/Rating";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
const Main = () => {
  return (
    <View style={styles.root} className={"flex-1 pt-10"}>
      <Head username={"Gürkan"} />
      <View className="flex">
        <Matches className="top-5" />
        <Events className="top-5" />
        <Rating className="top-5" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    fontFamily: "Montserrat",
  },
});
export default Main;

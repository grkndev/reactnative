import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import Matches from "../../components/MatchCard";
import { useColorScheme } from "nativewind";
export default function Live(){
    const { colorScheme, toggleColorScheme } = useColorScheme();
   return (
    <View style={[styles.container]} className="bg-white dark:bg-black ">
    <ScrollView>
      <Matches
        week="FINAL"
        team1={{ name: "FNC", logo: require("../../assest/teams/fnc.png") }}
        team2={{ name: "PRX", logo: require("../../assest/teams/pr.png") }}
        score="1 - 0"
        status={"LIVE"}
        live={true}
      />

      
    </ScrollView>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

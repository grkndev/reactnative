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
export default function Upcoming(){
  const { colorScheme, toggleColorScheme } = useColorScheme();
   return (
    <View style={[styles.container, { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" }]}>
    <ScrollView>
      <Matches
        week="FINAL"
        team1={{ name: "NAVI", logo: require("../../assest/teams/navi.png") }}
        team2={{ name: "BBL", logo: require("../../assest/teams/bbl.png") }}
        score="VS"
        status={"UPCOMING"}
        live={false}
        event="VCT2023: EMEA LAST CHANCE QUALIFIER"
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
  
import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import LiveMacthes from "./Matches/Live";
import ResMacthes from "./Matches/Results";
import UpMacthes from "./Matches/Upcoming";
import { useColorScheme } from "nativewind";
import Head from "../components/Head";


const Live = () =>  <LiveMacthes />;
const Upcoming = () => (
 <UpMacthes />
);
const Results = () => (
  <ResMacthes />
  );
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Canlı Maçlar" },
      { key: "second", title: "Gelecek Maçlar" },
      { key: "results", title: "Geçmiş Maçlar" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View className="pt-10 bg-white dark:bg-black">
        {/* pt-10 */}
      <Head username={"Gürkan"} />

      <View className="p-4 mt-2 w-full">
        {/* p-4 */}

      <View  className=" bg-black dark:bg-gray-700 justify-center  w-full rounded-md flex flex-row">
        {/* pr-2 */}
        
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text className="text-white p-2 mx-1 bg-[#1e1e1e] dark:bg-gray-800  rounded" style={{ opacity }}>{route.title}</Animated.Text>
              {/* p-2 */}
            </TouchableOpacity>
          );
        })}
      </View>

      </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    first: Live,
    second: Upcoming,
    results: Results,
  });

  render() {
    return (
      <TabView
        className="dark:bg-black"
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
const PageColor = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return colorScheme;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

  tabItem: {
    
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    
  },
});

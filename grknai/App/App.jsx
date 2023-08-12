import { StatusBar } from "expo-status-bar";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./src/screens/ChatScreen";
import MainScreen from "./src/screens/MainScreen";
import "react-native-url-polyfill/auto"
import { useFonts } from "expo-font";


const Stack = createNativeStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <></>;
  } else
    return (
        <SafeAreaView className="flex-1 ">
          <ImageBackground
            source={require("./src/assets/bg.png")}
            style={styles.backgroundImage}
          >
            <StatusBar style="light" />
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home" component={MainScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </ImageBackground>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,

    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

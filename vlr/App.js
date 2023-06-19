import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import AppLoading from "expo-app-loading";
import Main from "./src/screen/Main";

import Icons from "./src/components/icons";
export default function App() {
  const Tab = createBottomTabNavigator();

  const [fontsLoaded] = useFonts({
    Montserrat: require("./src/assest/fonts/Montserrat.ttf"),
    "Montserrat-Bold": require("./src/assest/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            left: 10,
            right: 10,
            elevation: 20,
            backgroundColor: "#000",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="justify-center items-center">
                <Icons.Home activated={focused} />
                <Text
                  className={
                    "text-white text-[8px] " +
                    (focused ? "font-montbold" : "font-mont")
                  }
                >
                  Anasayfa
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Maçlar"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="justify-center items-center">
                <Icons.Signal activated={focused} />
                <Text
                  className={
                    "text-white text-[8px] " +
                    (focused ? "font-montbold" : "font-mont")
                  }
                >
                  Maçlar
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Etkinlikler"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="justify-center items-center">
                <Icons.Calendar activated={focused} />
                <Text
                  className={
                    "text-white text-[8px] " +
                    (focused ? "font-montbold" : "font-mont")
                  }
                >
                  Etkinlikler
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="En iyiler"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="justify-center items-center">
                <Icons.Flame activated={focused} />
                <Text
                  className={
                    "text-white text-[8px] " +
                    (focused ? "font-montbold" : "font-mont")
                  }
                >
                  En iyiler
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profil"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="justify-center items-center">
                <Icons.Profile activated={focused} />
                <Text
                  className={
                    "text-white text-[8px] " +
                    (focused ? "font-montbold" : "font-mont")
                  }
                >
                  Profil
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

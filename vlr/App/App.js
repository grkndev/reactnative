import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useColorScheme } from "nativewind"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AppLoading from "expo-app-loading";
import Main from "./src/screen/Main";
import Matches from "./src/screen/Matches";
import Icons from "./src/components/icons";
import Rankings from "./src/screen/Rankings";
import Events from "./src/screen/Events";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [fontsLoaded] = useFonts({
    Montserrat: require("./src/assest/fonts/Montserrat.ttf"),
    "Montserrat-Bold": require("./src/assest/fonts/Montserrat-Bold.ttf"),
    "Valorant": require("./src/assest/fonts/valorant.ttf"),
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
            // backgroundColor: colorScheme === "dark" ? "#1F1F1F" : "#fff",            
            backgroundColor: colorScheme === "dark" ? "#6B47C5" : "#000",
            position: "absolute",
            borderTopWidth: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 90,
            shadowColor: "#6B47C5",
            
            
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
          component={Matches}
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
          component={Events}
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
          component={Rankings}
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
{/* 
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
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

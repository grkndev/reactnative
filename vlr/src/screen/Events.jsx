import React, { useRef, useState } from "react";
import Head from "../components/Head";
import AllEvents from "../components/AllEvent";
import { useFocusEffect } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { View, StyleSheet, TouchableOpacity, Text, Switch } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
const Events = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const bottomSheetModalRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [event, setEvent] = useState({
    name: "Global Etkinlikler",
    type: 0,
  });
  const snapPoints = [ "50%","75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function closeModal() {
    bottomSheetModalRef.current?.close();
  }
  useFocusEffect(
    React.useCallback(() => {
      return () => bottomSheetModalRef.current?.close();
    }, [])
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.root} className={"flex h-full pt-10 dark:bg-black"}>
          <BottomSheetModal
          
          handleStyle={{
            backgroundColor: colorScheme == "dark" ? "#2e2e2e" : "#ececec",
          }}
            backgroundStyle={{
              backgroundColor: colorScheme == "dark" ? "#1E1E1E" : "#fff",
            }}
            enablePanDownToClose={true}
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
          >
            <BottomSheetScrollView className="">
            <View className=" items-center  pt-4">
                <TouchableOpacity
                  onPress={() => {
                    setEvent({ name: "tüm etkinlikler", type: -1 });
                    closeModal();
                  }}
                  className="w-full bg-mor/50 py-1"
                >
                  <Text className="dark:text-white p-4 text-xl font-montbold rounded text-center  border-mor/50 w-full">
                    TÜM ETKINLIKLER
                  </Text>
                </TouchableOpacity>
              </View>
              <View className=" items-center  pt-2">
                <TouchableOpacity
                  onPress={() => {
                    setEvent({ name: "Global etkinlikler", type: 0 });
                    closeModal();
                  }}
                  className="w-full bg-mor/50 py-1"
                >
                  <Text className="dark:text-white p-4 text-xl font-montbold rounded text-center  border-mor/50 w-full">
                    GLOBAL ETKINLIKLER
                  </Text>
                </TouchableOpacity>
              </View>
              <View className=" items-center pt-2">
                <Text className="dark:text-white p-4 text-xl font-montbold rounded bg-mor/50 text-center w-full">
                  {String("Bölgesel Etkinlikler").toUpperCase()}
                </Text>
                <View className="w-full gap-1">
                  <TouchableOpacity
                    onPress={() => {
                      setEvent({ name: "Bölgesel: EMEA", type: 1 });
                      closeModal();
                    }}
                    className=" bg-mor/25 py-2"
                  >
                    <Text className="dark:text-white text-lg text-center font-bold">
                      EMEA
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setEvent({ name: "Bölgesel: AMERICAS", type: 2 });
                      closeModal();
                    }}
                    className=" bg-mor/25 py-2"
                  >
                    <Text className="dark:text-white text-lg text-center font-bold">
                      AMERICAS
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setEvent({ name: "Bölgesel: PACIFIC", type: 3 });
                      closeModal();
                    }}
                    className="bg-mor/25 py-2"
                  >
                    <Text className="dark:text-white text-lg text-center font-bold">
                      PACIFIC
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setEvent({ name: "Bölgesel: CHINA", type: 4 });
                      closeModal();
                    }}
                    className="bg-mor/25 py-2"
                  >
                    <Text className="dark:text-white text-lg text-center font-bold">
                      CHINA
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

          <Head username={"Gürkan"} />

          <View className="flex">
            <TouchableOpacity
              onPress={handlePresentModal}
              className="top-5 mx-2 bg-black dark:bg-gray-500 flex rounded p-2"
            >
              <Text
                className={
                  "text-white text-center text-lg font-normal font-montbold"
                }
              >
                {String(event.name).toUpperCase()}
              </Text>
            </TouchableOpacity>

            <AllEvents type={event.type} />
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  root: {
    fontFamily: "Montserrat",
    flex: 1,
  },
});
export default Events;

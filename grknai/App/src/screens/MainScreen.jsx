import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  RefreshControl,
  FlatList,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icons from "../Icons";
import { getChats, newChat, updateChat, deleteChat } from "../api/mongoose";
import { useEffect, useState } from "react";
export default function MainScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [refresing, setRefresing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalChat, setModalChat] = useState("");
  const [modalChatId, setModalChatId] = useState("");
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setRefresing(true);
    getChats().then((res) => {
      setData(res);
      setRefresing(false);
    });
  }
  async function chatUpdate() {
    updateChat(modalChatId, modalChat);
    setModalVisible(!modalVisible);
    getData();
  }
  async function chatDelete() {
    deleteChat(modalChatId);
    setModalVisible(!modalVisible);
    getData();
  }
  async function createChat() {
    const chat = await newChat();
    navigation.navigate("Chat", { newChat: true, chatId: chat.chatId });
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={styles.modalText}
              className="text-white font-mont text-lg"
            >
              Change chat name
            </Text>
            <TextInput
              className="w-[70vw] text-white h-10 mb-4 border-2 border-white/25 rounded-md p-2"
              value={modalChat}
              onChangeText={(text) => setModalChat(text)}
            />
            <View className="flex-row gap-x-14">
              <Pressable
                className="bg-[#0dffa6] py-2 px-4 rounded-md"
                onPress={() => chatUpdate()}
              >
                <Text className="text-black">Update</Text>
              </Pressable>
              <Pressable
                className="bg-[#c11919] py-2 px-4 rounded-md"
                onPress={() => chatDelete()}
              >
                <Text className="text-white">Delete</Text>
              </Pressable>
              <Pressable
                className="bg-[#005637] p-2 rounded-md"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.backgroundImage}
      >
        <View className="flex-1 flex-col top-10">
          <View className=" w-full border-b-2 border-[#005637]">
            <Text className="text-white font-montbold text-center text-4xl p-4 m-4">
              GRKN AI
            </Text>
          </View>
          <View className="w-screen h-screen flex-1 mb-8 ">
            <FlatList
              data={data}
              className="h-full"
              refreshControl={
                <RefreshControl
                  refreshing={refresing}
                  onRefresh={() => {
                    getData();
                  }}
                />
              }
              renderItem={({ item }) => (
                <View className="flex flex-row w-full border-b-2 border-[#005637]">
                  <TouchableOpacity
                    onLongPress={() => {
                      setModalChat(item.title);
                      setModalChatId(item.chatId);
                      setModalVisible(true);
                    }}
                    onPress={() => {
                      navigation.navigate("Chat", {
                        newChat: false,
                        chatId: item.chatId,
                      });
                    }}
                    className="w-full flex-row  items-center"
                  >
                    <View className={"left-4"}>
                      <Icons.Chat className={"ml-4 pl-4"} />
                    </View>
                    <Text className="font-mont w-full text-white text-start items-center text-2xl p-6 ">
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, i) => i}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => createChat()}
          className="justify-center items-center h-16 w-16 md:h-20 md:w-20 right-[20] bottom-[20] absolute bg-green-500  rounded-full"
        >
          <Text className="font-mont text-white text-center text-2xl bottom-[1] md:bottom-[0] md:text-4xl relative">
            +
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#005637",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

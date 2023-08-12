import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icons from "../Icons";
import MessageBox from "../components/MessageBox";
import { getChat, newMessage } from "../api/mongoose";
import chatgpt from "../api/openai";
const ChatScreen = ({ route, navigation }) => {
  const { newChat, chatId } = route.params;
  const [state, setstate] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  async function getData() {
    getChat(chatId).then((res) => {
      setData(res.messages);
    });
  }
  async function sendMesaage(user) {
    setDisabled(true);
    setData((prevData) => [...prevData, { message: text, sender: user }]);

    setText("");
    await newMessage(chatId, text, user);
    sendMesaageAI();
  }
  async function sendMesaageAI() {
    let botAnswer = await chatgpt(text);
    setData((prevData) => [...prevData, { message: botAnswer, sender: "bot" }]);

    newMessage(chatId, botAnswer, "bot");
    setDisabled(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.backgroundImage}
      >
        <View className="flex-1">
          <View className="flex-1  justify-center items-center border-b-2 border-[#1CCB77]/25">
            <View className=" bg-[#202123]/50 w-[70%] h-[50%] top-4 rounded-md flex-row  p-2 justify-center item-center">
              <TouchableOpacity
                onPress={() => {
                  setstate(1);
                }}
                className={
                  "flex-1  rounded-md justify-center item-center" +
                  (state == 1 && " bg-[#005637]/25 ")
                }
              >
                <Text className="text-white text-center text-lg md:text-xl font-montbold">
                  GPT-3.5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setstate(2)}
                className={
                  "flex-1  rounded-md justify-center item-center" +
                  (state == 2 && " bg-[#005637]/25 ")
                }
              >
                <Text className="text-white text-center text-lg md:text-xl font-montbold">
                  GPT-4
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-[6] ">
            <View className="top-4 mx-1 ">
              <FlatList
                data={data.slice()}
                renderItem={({ item }) => (
                  <MessageBox user={item.sender} content={item.message} />
                )}
                keyExtractor={(item, i) => i}
                className="h-full bottom-4 "
                contentContainerStyle={{ flexGrow: 1 }}
              />
            </View>
          </View>
          <View className="flex-[.5] flex-row mb-2 gap-x-3 justify-center items-center md:px-2">
            <TouchableOpacity
              onPress={() => {
                text != "" && sendMesaage("user");
              }}
              className="bg-[#1C503D] p-4  rounded-md  justify-center items-center"
            >
              <Icons.Chat />
            </TouchableOpacity>
            <TextInput
              placeholder="Write anything"
              editable={!disabled}
              selectTextOnFocus={false}
              placeholderTextColor={"#888888"}
              onChangeText={(text) => setText(text)}
              value={text}
              className="bg-[#1C503D] text-white p-2 w-[80%] md:w-[90%] h-[100%] md:h-[70%] rounded-xl"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ChatScreen;
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { docco,atomOneDark } from "react-syntax-highlighter/styles/hljs";



const getCodeBlocks = (message) => {
  const codeBlockRegex = /```(.*?)\n(.*?)```/gs;
  const matches = [];
  let match;
  let lastIndex = 0;
  while ((match = codeBlockRegex.exec(message)) !== null) {
    const [fullMatch, language, code] = match;
    const normalText = message.slice(lastIndex, match.index);
    lastIndex = match.index + fullMatch.length;
    matches.push({ language, code, normalText });
  }
  if (lastIndex < message.length) {
    const normalText = message.slice(lastIndex);
    matches.push({ normalText });
  }
  return matches;
};
const renderCodeBlocks = (codeBlocks) => {
  return codeBlocks.map((block, index) => {
    if (block.language && block.code) {
      return (
        <View key={index} className="max-w-xs" style={styles.codeContainer}>
          <Text className="font-mont text-xs" style={styles.codeTitle}>{block.language}</Text>
          <SyntaxHighlighter language={block.language} style={atomOneDark}>
            {block.code}
          </SyntaxHighlighter>
        </View>
      );
    } else if (block.normalText) {
      return <Text key={index}>{block.normalText}</Text>;
    }
    return null;
  });
};
const MessageBox = ({ user, content }) => {
  const codeBlocks = getCodeBlocks(content);
  if (user == "user") {
    return (
      <View className=" flex-col justify-center items-end">
        <View className="bg-[#1CCB77]/70 m-2 rounded-b-2xl rounded-l-2xl w-[90%] h-auto">
          <Text className="p-2 text-white/80">{content}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View className=" flex-col justify-center items-start">
        <View className="bg-[#FFFFFF]/20 m-2 rounded-b-2xl rounded-r-2xl w-[90%] h-auto">
          <Text className="p-2 text-white/80">
           
            {renderCodeBlocks(codeBlocks)}
            
          </Text>
        </View>
      </View>
    );
  }
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  codeContainer: {
    backgroundColor: '#202123',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  codeTitle: {
    
    color: '#fff',
    marginBottom: 5,
  },
});

import { React, useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { RouteProp, useScrollToTop } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import dayjs from "dayjs";
import routes from "../navigation/routes";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

const user = {
  id: "1",
  fullName: "John Doe",
};

const initialChatData = {
  messages: [
    {
      id: "1",
      text: "Hunxa sir, ma audai xu sir.",
      createdAt: "2021-07-07T17:00:00.000Z",
      sender: {
        id: "2",
        fullName: "John Doe",
      },
    },
    {
      id: "3",
      text: "Ahh ma Location mai xu",
      createdAt: "2021-07-07T17:00:00.000Z",
      sender: {
        id: "1",
        fullName: "John Doe",
      },
    },
    {
      id: "2",
      text: "Hii!, Tapai location mai hunuhunxa?",
      createdAt: "2021-07-07T17:00:00.000Z",
      sender: {
        id: "2",
        fullName: "Driver",
      },
    },
  ],
};

export default function ChatScreen({ navigation, route }) {
  const headerHeight = useHeaderHeight();
  const paddingBottom = 36;
  const flatListRef = useRef(null);
  const [chatData, setChatData] = useState(initialChatData);

  function send(data) {
    const { message } = data;
    setChatData((prev) => ({
      messages: [
        {
          id: `${prev.messages.length + 1}`,
          text: message,
          createdAt: new Date().toISOString(),
          sender: user,
        },
        ...prev.messages,
      ],
    }));
  }
  useScrollToTop(flatListRef);

  return (
    <Screen backgroundColor="white" noKeyboardAwareScroll noSafeArea>
      <FlatList
        inverted
        ref={flatListRef}
        data={chatData.messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item: message }) => (
          <View
            key={message.id}
            className={`mt-1 flex-row ${
              message.sender.id === user.id ? "justify-end" : "justify-start"
            }`}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "Info",
                  `Message: ${message.text}
Sender: ${message.sender.fullName}
Sent on: ${dayjs(message.createdAt).format("MMM DD, YYYY [at] h:mm A")}`,
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Copy Message",
                      onPress: () => Clipboard.setStringAsync(message.text),
                    },
                  ]
                );
              }}
              className={`rounded-3xl px-4 py-2 ${
                message.sender.id === user.id ? "bg-primary" : "bg-lightGray"
              }`}
            >
              <AppText
                className={`text-lg ${
                  message.sender.id === user.id ? "text-white" : "text-black"
                }`}
              >
                {message.text}
              </AppText>
            </TouchableOpacity>
          </View>
        )}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        className="px-3"
      />

      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={headerHeight - paddingBottom}
        >
          <View
            className="flex-row items-center bg-white px-4"
            style={{
              paddingBottom,
            }}
          >
            <TextArea send={send} />
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View
          className="flex-row items-center bg-white px-4"
          style={{
            paddingBottom,
          }}
        >
          <TextArea send={send} />
        </View>
      )}
    </Screen>
  );
}

function TextArea({ send }) {
  const [message, setMessage] = useState("");

  return (
    <>
      <View className="flex-1">
        <AppTextInput
          accessibilityLabel="Message"
          className="max-h-32"
          multiline
          placeholder="Type a message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
      </View>
      <TouchableOpacity
        disabled={!message}
        onPress={() => {
          send({
            message,
          });
          setMessage("");
        }}
      >
        <View className="ml-2">
          <MaterialCommunityIcons
            name="send-circle"
            size={40}
            color={message ? colors.primary : colors.lightGray2}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

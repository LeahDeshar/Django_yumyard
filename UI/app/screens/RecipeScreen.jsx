import React from "react";
import { Text, View } from "react-native";
import AppVideo from "../components/AppVideo";

const RecipeScreen = () => {
  return (
    <View className={"justify-center"}>
      <AppVideo />
      <Text>Videos</Text>
    </View>
  );
};

export default RecipeScreen;

import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const Test = () => {
  return (
    <Screen>
      <View className={"mx-10 "}>
        <Text className={"text-prim font-semibold text-2xl my-5"}>Search</Text>
        <AppTextInput
          placeholder="Hungry ?"
          icon="search"
          materialIcons
          className={" w-80"}
        />
      </View>
    </Screen>
  );
};

export default Test;

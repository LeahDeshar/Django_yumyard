import { View, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import { Food1Data } from "../utils/data/Food1Data";
const Test = () => {
  // this function is called only once when the component is mounted
  const [randomData, setRandom] = useState(null);
  useEffect(() => {
    console.log("Component Mounted");

    setRandom(Food1Data[Math.floor(Math.random() * Food1Data.length)]);
  }, []);
  console.log("Random Data: ", randomData);

  return (
    <Screen noSafeArea={true}>
      <View className={"bg-secondary w-full "}>
        <View className={"mx-10 mt-20 mb-10"}>
          <AppTextInput
            placeholder="Hungry ?"
            icon="search"
            materialIcons
            className={" w-80"}
          />
        </View>
      </View>
      <View className={"mx-10 "}>
        <Text className={"text-prim font-semibold text-xl my-5"}>
          Your History
        </Text>
        <View className={"flex-row items-center justify-between"}>
          <Text>Your Recent Searches</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <View className={"flex-row items-center bg-white "}>
          <Image
            source={randomData?.image}
            style={{
              height: 80,
              width: 80,
            }}
          />
          <Text>{randomData?.name}</Text>
        </View>

        <View></View>
      </View>
    </Screen>
  );
};

export default Test;

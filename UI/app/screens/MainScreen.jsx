import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppLayout from "../layout/AppLayout";
import { useNavigation } from "@react-navigation/native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

const MainScreen = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Register");
  };
  return (
    <Screen noSafeArea={true}>
      <View>
        <Image
          source={require("../assets/bg3.png")}
          style={{ width: 430, height: 350, resizeMode: "cover" }}
        />
        <View className={"flex-row items-center absolute top-20 mt-2 left-8 "}>
          <AppTextInput
            // noBorder
            placeholder="Search"
            icon="search"
            materialIcons
            className={"w-80 mr-2"}
          />
          <Image
            source={require("../assets/driverAvatar.png")}
            style={{ borderRadius: 50, width: 50, height: 50 }}
          />
        </View>
        {/* <AppText bigText={true} className="text-white">
          What Would You Like To Cook Today?
        </AppText> */}
      </View>
    </Screen>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    color: "#ffffff51",
  },
});

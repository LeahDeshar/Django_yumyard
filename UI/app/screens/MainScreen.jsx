import { View, Text, Button, StyleSheet } from "react-native";
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
    <Screen>
      <View className="bg-primary  px-3  py-5">
        <AppText bigText={true} className="text-white">
          What Would You Like To Cook Today?
        </AppText>
        <AppTextInput placeholder="Search" icon="search" materialIcons />
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

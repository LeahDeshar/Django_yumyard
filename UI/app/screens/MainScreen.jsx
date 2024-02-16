import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppLayout from "../layout/AppLayout";
import { useNavigation } from "@react-navigation/native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Header from "../layout/Header";
import Categories from "../components/Categories";
import Recommend from "../components/Recommend";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

const MainScreen = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Register");
  };
  return (
    <Screen noSafeArea={true}>
      <Header />
      <Categories />
      <Recommend title={"Recommended For You"} />
      <Card3 title={"Our Latest Articles"} />
      <View className={" bg-white"}>
        <Image
          source={require("../assets/article/adv11.png")}
          style={{
            width: 450,
            height: 410,
            marginTop: 10,
          }}
        />
      </View>
      <View
        className={"bg-white py-8 flex-row justify-between px-5 items-center "}
      >
        <View>
          <Text className={"font-semibold text-lg"}>YumYard Special</Text>
          <Text className={" text-4xl font-bold"}>Premium Recipe</Text>
        </View>
        <Image
          source={require("../assets/article/adv22.png")}
          style={{
            width: 150,
            height: 100,
            marginTop: 10,
            bottom: 30,
          }}
        />
      </View>
      <Recommend title={"YumYard Original"} isYumyard={true} />
      <Recommend title={"Guided Recipes"} isGuided={true} />
      <Card2 title={"Celebrity Chef Recipe"} isPro={true} />

      <View className={"bg-highlight mt-10 pt-5 pb-10 mb-10"}>
        <View className={"flex-row justify-between"}>
          <View className={"ml-6 mt-10 pt-10"}>
            <Text className={"font-semibold text-lg"}>YumYard Special</Text>
            <Text className={" text-3xl font-bold"}>Read Up On</Text>
            <Text className={" text-3xl font-bold"}>Meal Planning</Text>
          </View>
          <Image
            source={require("../assets/article/a5.png")}
            style={{
              width: 250,
              height: 200,
              marginTop: 10,
              bottom: 30,
              right: 30,
              // resizeMode: "contain",
            }}
          />
        </View>
        <Card2 title={"Meal Planning Tips"} isTip={true} />

        <Card2 title={"Ideas For Meal Plan"} />
      </View>
      <Recommend title={"Under 10 Ingrdients"} />
      <Card2 title={"Highly Rated"} />

      <Card3 title={"Easy Recipe Articles"} />
      <Card2 title={"Healthy Recipes"} />
      <Card3 title={"Dinner Recipe Articles"} />
      <Categories horizontal={false} isExplore={true} />
    </Screen>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    color: "#ffffff51",
  },
});

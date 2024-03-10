import { View, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import { Food1Data } from "../utils/data/Food1Data";
import dayjs from "dayjs";
import Card2 from "../components/Card2";
import popularSearches from "../utils/data/Popular";
import AppButton from "../components/AppButton";
const Test = () => {
  const [randomData, setRandom] = useState(null);
  useEffect(() => {
    console.log("Component Mounted");

    setRandom(Food1Data[Math.floor(Math.random() * Food1Data.length)]);
  }, []);
  console.log("Random Data: ", randomData);

  const [randomDate, setRandomDate] = useState(null);

  useEffect(() => {
    generateRandomDate();
  }, []);

  const generateRandomDate = () => {
    const randomDays = Math.floor(Math.random() * 365);
    const randomDate = dayjs().subtract(randomDays, "day");
    const dateNew = randomDate?.format("YYYY-MM-DD");
    setRandomDate(dateNew);
  };

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
      <View className={"mx-5 "}>
        <Text className={"text-prim font-semibold text-2xl my-4"}>
          Your History
        </Text>
        <View className={"flex-row items-center justify-between my-3"}>
          <Text className={"font-semibold text-xl"}>Your Recent Searches</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <View className={"flex-row items-center bg-white "}>
          <Image
            source={randomData?.image}
            style={{
              height: 70,
              width: 80,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          />
          <View className={"ml-3  w-64"}>
            <Text className={"font-bold text-lg pb-1"}>{randomData?.name}</Text>
            <View className={"flex-row justify-between "}>
              <Text>{randomDate && randomDate}</Text>
              <Text className={"mr-3 text-prim"}>2 new recipes</Text>
            </View>
          </View>
        </View>

        <View></View>
      </View>
      <Card2 title={"Your recently viewed recipes"} isTip={true} />
      <View className={"mx-5"}>
        <Text className={"text-prim font-semibold text-2xl my-4"}>
          Popular Searches
        </Text>
        <PopularCard />
      </View>
      <View>
        <Premium />
      </View>
    </Screen>
  );
};

export default Test;

const PopularCard = () => {
  return (
    <View className={"flex-row flex-wrap justify-between my-2"}>
      {popularSearches?.map((item, index) => {
        return (
          <>
            <View key={index} className={"my-1"}>
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    height: 100,
                    width: 190,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    height: 100,
                    width: 190,
                    borderRadius: 5,
                    position: "absolute",
                  }}
                ></View>
                <Text
                  className={
                    "font-bold text-lg pb-1 absolute text-highlight bottom-0 ml-2"
                  }
                >
                  {item.name}
                </Text>
              </View>
            </View>
          </>
        );
      })}
    </View>
  );
};

const Premium = () => {
  return (
    <View className={"px-3 bg-highlight py-5 pb-16"}>
      <View>
        <Text className={"text-prim font-semibold text-2xl my-5 text-center"}>
          YumYard Premium
        </Text>
      </View>

      <Text className={"text-center text-base"}>
        Search the most popular recipes that have been proven by the community.
      </Text>
      <View className={"justify-center items-center"}>
        <AppButton
          title="Start 14 Days Free Trial"
          className={"bg-primary w-52 mt-3 mb-5"}
          textStyle={"text-white"}
        />
        <Text className={"my-2"}>Only 1000rs/month after trial</Text>
        <Text>No commitment,cancel any time</Text>
      </View>
    </View>
  );
};

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";

import colors from "../config/colors";
import { Food1Data } from "../utils/data/Food1Data";
import { Article } from "../utils/data/Article";
import { ListItemSeparator } from "./lists";
const Card3 = ({ title, isPro = false, isGuided = false }) => {
  return (
    <View className={"mb-4"}>
      <View className={"flex-row justify-between items-center mt-3 mx-5"}>
        <Text className={"text-prim font-semibold text-2xl my-5"}>{title}</Text>
        <TouchableOpacity>
          <Text className={"text-prim"}> View All</Text>
        </TouchableOpacity>
      </View>

      <View className={"mx-6"}>
        <ScrollView>
          {Article.map((food, index) => (
            <TouchableOpacity key={index}>
              <View className={"flex-row mb-3 mt-2"}>
                <Image
                  source={food.image}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    marginRight: 5,
                  }}
                />

                <View className={"ml-3 w-64 "}>
                  <Text className={"text-prim italic mb-1"}>
                    @{food.username}
                  </Text>
                  <Text className={" font-bold text-lg"}>{food.title}</Text>
                </View>
              </View>
              <ListItemSeparator />
            </TouchableOpacity>
          )).slice(0, 5)}
        </ScrollView>
      </View>
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({});
